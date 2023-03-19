<script>

    $(function(){
		//팝업
			$(".w_pop").click(function(){
				$(this).next().show();
				$("body").css({ overflowY:"hidden" });
				return false;
			});

			$(".close").click(function(){
				$(".pop").hide();
				$("body").css({ overflowY:"auto" });
				return false;
			});


        //--------------------------전화랑 메일 클릭시
        $("a.pn_btn").click(function(){
        
            $(".pn").slideToggle();
            return false;
        });
        
        $("a.mail_btn").click(function(){
        
            $(".mail").slideToggle();
            return false;
        });
        
        
            
            
        ////////////기본설정////    
   
                    $(".h_inner h2").css({opacity:1});           
                    $(".h_inner p").css({opacity:1});
                    $(".t1").css({opacity:0});           
                    $(".t2").css({opacity:0});
                    $(".t3").css({opacity:0}); 
                    $(".t4").css({opacity:0}); 
                    $(".t5").css({opacity:0});           
                    $(".t6").css({opacity:0});
                    $(".t7").css({opacity:0}); 
                    $(".t8").css({opacity:0}); 
					
        /////////////////스크롤시/////////////////////////
        
         $(window).scroll(function(){ //스크롤하는동안 //스크롤링사이트-메뉴바 참고
		  
			  var b = $(document).scrollTop(); 
			      $("#tt").text(b);
		  
			  if((b >=0) && (b < 1100)) {	//home 구간   
                    $(".h_inner h2").css({opacity:1});           
                    $(".h_inner p").css({opacity:1});
                    $("#gnb li a img").attr('src','images/dot.png');
				    $("#gnb li:eq(0) img").attr('src','images/dot_on.png');
                
			  } 
	
			  if((b >= 1100) && (b < 2200)) {	//about
                    $(".h_inner h2").css({opacity:0});
                    $(".h_inner p").css({opacity:0});                    
                    $(".t1").css({opacity:1});           
                    $(".t2").css({opacity:1});
                    $("#gnb li a img").attr('src','images/dot.png');
                    $("#gnb li:eq(1) a img").attr('src','images/dot_on.png');
				    
			  } 
							  
			  if((b >= 2200) && (b < 3300)) { //skill
                    $(".h_inner h2").css({opacity:0});           
                    $(".h_inner p").css({opacity:0});
                    $(".t1").css({opacity:0});           
                    $(".t2").css({opacity:0});
                    $(".t3").css({opacity:1}); 
                    $(".t4").css({opacity:1});
                    $("#gnb li a img").attr('src','images/dot.png');
				    $("#gnb li:eq(2) a img").attr('src','images/dot_on.png');                  
			  } 
              
              if((b >= 3300) && (b < 5600)) { //works
                    $(".h_inner h2").css({opacity:0});           
                    $(".h_inner p").css({opacity:0});
                    $(".t3").css({opacity:0}); 
                    $(".t4").css({opacity:0});           
                    $(".t5").css({opacity:1});           
                    $(".t6").css({opacity:1});     
                    $("#gnb li a img").attr('src','images/dot.png');
                    $("#gnb li:eq(3) a img").attr('src','images/dot_on.png');
			  } 
              
               			  
			  if(b >= 5600) {	//contact        
                    $(".h_inner h2").css({opacity:0});           
                    $(".h_inner p").css({opacity:0});
                    $(".t5").css({opacity:0}); 
                    $(".t6").css({opacity:0});           
                    $(".t7").css({opacity:1});           
                    $(".t8").css({opacity:1});  
				    $("#gnb li a img").attr('src','images/dot.png');
                    $("#gnb li:eq(4) a img").attr('src','images/dot_on.png');  
			  } 						  
							  
		  
	  });
      
      
       $(window).scroll(function(){
            
            var b = $(document).scrollTop();
            
                  
            if((b<=6300) && (b>5600)){  //contact    
                                        
                $(".t7").css({opacity:1});           
                $(".t8").css({opacity:1});           
                $(".h_inner h2").css({opacity:0});           
                $(".h_inner p").css({opacity:0});
                
               
            }
            
            if((b<=5600) && (b>3300)){ //works
                
                $(".h_inner h2").css({opacity:0});           
                $(".h_inner p").css({opacity:0});                        
                $(".t5").css({opacity:1});           
                $(".t6").css({opacity:1});           
                $(".t7").css({opacity:0});           
                $(".t8").css({opacity:0});           
                
            }
            
            
             if((b<=3300) && (b>2200)){ //skills
            
                $(".h_inner h2").css({opacity:0});           
                $(".h_inner p").css({opacity:0});                       
                $(".t5").css({opacity:0});           
                $(".t6").css({opacity:0}); 
                $(".t3").css({opacity:1});           
                $(".t4").css({opacity:1});            
					                         
            
            }
            
             if((b<=2200) && (b>1100)){ //about
            
                $(".h_inner h2").css({opacity:0});           
                $(".h_inner p").css({opacity:0});                 
                $(".t3").css({opacity:0});           
                $(".t4").css({opacity:0}); 
                $(".t2").css({opacity:1});           
                $(".t1").css({opacity:1});   
                       
                
            }
            
             if((b<=1100) && (b>0)){  //main
                                   
                $(".t2").css({opacity:0});           
                $(".t1").css({opacity:0});
                $(".h_inner h2").css({opacity:1});
                $(".h_inner p").css({opacity:1});
                
                
                
            }
           
            
        });        
        
        ///////////////스크롤 끝//////////////////////
        
        
       
       
       //스크롤 순차
       $(window).scroll(function(){
		  
			var b = $(this).scrollTop();//얼마만큼 스크롤했는지의 값
			$("#test").text(b);
                
            
            if( b > 900) {
                    $("#about .hobby").animate({ left: 0},600);
                    $("#about .adress").animate({ right: 0},1200);
                    
            }
            
            
			if( b >2400 ){
					$(".s1 .d1_move").animate({ width:"80%"});
					$(".s1 .d2_move").animate({ width:"50%"},650);
					$(".s2 .d3_move").animate({ width:"85%"},800);
					$(".s2 .d4_move").animate({ width:"80%"},950);
					$(".s2 .d5_move").animate({ width:"75%"},1050);
					
			}
            
             if( b > 5400) {
                    $("#contact .number").animate({opacity:1, top:480},1000);
                    
                    
            }
            
            
            if( b > 3300) {
                    $("#works .w1").animate({left: 200},1000,'easeInOutCubic');
                    $("#works .w2").animate({right: 200},1200,'easeInOutCubic');
                    $("#works .w3").animate({left: 314},2400,'easeInOutQuint');
                    $("#works .w4").animate({right: 100},2600,'easeInOutQuint');
                    
                    
            }
	
        });
        
        
        
        
    /// 점 클릭시 ///    
            
      $("#gnb li:eq(0) img").attr('src','images/dot_on.png'); //초기설정
        
      $("#gnb li:eq(0) a, h1 a").click(function(){//home
            $("#gnb li a img").attr('src','images/dot.png');
            $("#gnb li:eq(0) a img").attr('src','images/dot_on.png');
			$('html,body').animate({ scrollTop:0},700); return false;	    
	   })
	  $("#gnb li:eq(1) a").click(function(){//about
            $("#gnb li a img").attr('src','images/dot.png');
            $("#gnb li:eq(1) a img").attr('src','images/dot_on.png');
			$('html,body').animate({ scrollTop:1240},700); return false;
	   })
	  $("#gnb li:eq(2) a").click(function(){//skills            
            $("#gnb li a img").attr('src','images/dot.png');
            $("#gnb li:eq(2) a img").attr('src','images/dot_on.png');
			$('html,body').animate({ scrollTop:2500},700);           
            return false;
	   })
	  $("#gnb li:eq(3) a").click(function(){
            $("#gnb li a img").attr('src','images/dot.png');
            $("#gnb li:eq(3) a img").attr('src','images/dot_on.png');
			$('html,body').animate({ scrollTop:3820},700); return false;
	   })
      $("#gnb li:eq(4) a").click(function(){
            $("#gnb li a img").attr('src','images/dot.png');
            $("#gnb li:eq(4) a img").attr('src','images/dot_on.png');
			$('html,body').animate({ scrollTop:6300},700); return false;
	   })
      
        
                
  
   
    });


</script>