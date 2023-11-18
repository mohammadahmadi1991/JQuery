$(document).ready(function(){
    $('#lamp-button').click(function(){
         if($(this).attr('data-light') == "Off"){
             $('#lamp').attr('src','lamp on.png');
             $(this).html('Off');
             $(this).attr('data-light','ON');
         } else{
             $('#lamp').attr('src','lamp off.png'); 
             $(this).html('ON');
             $(this).attr('data-light','Off');  
         }
    });
});
