$(document).ready(function(){
    
    var input = $(".input");
    
    var  list = $(".list");
    var id = 0;
    
   $(".btn").on("click",function(){
      
       if(input.val()=="")
          { 
              input.val("PLEASE ENTER SOMETHING.......").css({color:"red",fontFamily: "'Amatic SC', cursive", fontSize:"200%"});
              
              setTimeout(function(){
                  input.val("");
              },2000);
              
          }
       
       else{
           
           var task = $("<div class= 'task'></div>").text(input.val());
                          
                    var check = $("<i class ='fas fa-check' style=color:greenyellow>").click(function(){
                         
                        var p = $(this).parent();
                        p.fadeOut(function(){
                           $(".comp").append(p);
                            p.fadeIn();
                        });
                       $(this).remove(); 
                    });
                          
                    var del = $(" <i class='fas fa-trash-alt' style=color:aqua>").click(function(){
                        
                        var p = $(this).parent();
                        p.fadeOut(function(){
                           p.remove(); 
                        });
                    });
                            
                    task.append(check,del);  
                  $(".notcomp").append(task);
                      }
              
       });
              input.on("keyup",function(e){
                  if(e.keyCode == 13 && input.val()!="")
                      {
                          
                    var task = $("<div class= 'task'></div>").text(input.val());
                          
                    var check = $("<i class ='fas fa-check' style=color:greenyellow>").click(function(){
                         
                        var p = $(this).parent();
                        p.fadeOut(function(){
                           $(".comp").append(p);
                            p.fadeIn();
                        });
                       $(this).remove(); 
                    });
                          
                    var del = $(" <i class='fas fa-trash-alt' style=color:aqua>").click(function(){
                        
                        var p = $(this).parent();
                        p.fadeOut(function(){
                           p.remove(); 
                        });
                    });
                            
                    task.append(check,del);  
                  $(".notcomp").append(task);
                      }
              });
              
          
       
         
    
 });