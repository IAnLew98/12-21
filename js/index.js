import $ from 'jquery';

$(function(){
 let windowW = $(window).width();
 if(window >= 1160){ 
  nav()
  submenu()
 }
 else if ( windowW < 1159 && windowW >= 980){
  nav()
  submenu()
 }
 else if ( windowW < 979 && windowW >= 580){
  tnav()
 }
 else if ( windowW < 579 ){
  tnav()
 }
//공통

//reset
})
//web nav
function nav(){
  $('nav li>a').on('click',function(e){
    const navA = $(this).attr('href')
    const aPos = $(navA).offset().top
    const headerHeight = $('header').innerHeight();
    $('html,body').animate({scrollTop:aPos- headerHeight},800) 
    return false
  }) 

}
//table,mobile nav
function tnav(){
  let navW = $('nav').width();
  //.btn click
  $('header .btn').on('click',function(e){
    $('nav').animate({left:0},400)
    $(this).hide()
  })
  //.btn scroll
$('nav li>a').on('click',function(e){
  const navA = $(this).attr('href')
  const aPos = $(navA).offset().top
  const headerHeight = $('header').innerHeight();
  $('html,body').animate({scrollTop:aPos- headerHeight},800) 
  $('nav').css('left','-'+navW+'px')
  $('header . btn').show
  return false

})
  //.btn close
  $('nav.close').on('click',function(e){
    $('nav').css('left','-'+navW+'px')
  })
}

function submenu(){
  $('ul li>a').on('click',function(e){
    const subA = $(this).attr('href')
    const Pos = $(subA).offset().top
    const headerHeight = $('header').innerHeight();
    $('html,body').animate({scrollTop:Pos- headerHeight},800)
    return false;
  })
}
    
  

