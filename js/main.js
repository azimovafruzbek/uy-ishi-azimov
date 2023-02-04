var $btn = $(".btn-primary")
var $btn1 = $(".btn-success")
var $btn2 = $(".btn-danger")
var $div = $(".popup")
var $close = $(".close-btn")
var $phone = $("h4 .phone")
var $overlay = $(".overlay")
var $phone2 = $("button .phone")

$(".btn-primary").click(function(){
    cb(-150)
    $overlay.css({"display" : "inline-block"})
    $phone.html("samsung")
    $phone2.html("samsung")

})

$(".btn-success").click(function(){
  cb(-150)
  $overlay.css({"display" : "inline-block"})
  $phone.html("iphone")
  $phone2.html("iphone")

})
$(".btn-danger").click(function(){
  cb(-150)
  $overlay.css({"display" : "inline-block"})
  $phone.html("xiomi")
  $phone2.html("xiomi")

})

function cb(value) {
    $div.animate({
      top: value,
      
    });
    
  }

  $close.click(function(){
     cb("1000")   
     $overlay.css({"display" : "none"})
   

})

