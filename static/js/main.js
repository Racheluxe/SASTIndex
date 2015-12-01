								        /* <![CDATA[ */
								        
								        (function($){
								        
								            "use strict";
								            
								            var ut_word_rotator = function() {
								                
								                var ut_rotator_words = [
								                   '<span><img src="./static/img/blogo.png" style="width:500px;"></span>','南京邮电大学<span>大学生科学技术协会</span>','<span>来到这里</span>','你已<span>领先</span>别人一步','<span>创新</span>，开源，<span>平等</span>','推动<span>技术</span>前行'
								                ] ,
								                counter = -1;  
								                var timeLine = 4000;              
								                
								                setInterval(function() {
								                $("#ut_word_rotator_1").fadeOut(function(){
								                	timeLine = 4000;
								                        $(this).html(ut_rotator_words[counter=(counter+1)%ut_rotator_words.length]).fadeIn();
								                    });
								                }, timeLine);
								            }
								            
								            ut_word_rotator();
								            
								        })(jQuery);
								        
								        /* ]]> */