
let w = $("#sideNav").width();

function openSideNav() {
    $("#sideNav").animate({ left: 0 }, 400)
    $("#open").animate({ left: w + 10 }, 400)
}

function closeSideNav() {
    $("#open").animate({ left: 15 }, 400)
    $('#sideNav').animate({ left: -w }, 400)
}

$("#open").click(function () {
    if ($('#sideNav').css('left') == 0+"px") {
        closeSideNav();
    } else {
        openSideNav()
    }
})



$('#xmark').click(function () {
    closeSideNav()
})

$('h4').click(function(){
    var x=$(this).next();
    if($(x).css("display")=="block"){
        x.slideUp()
    }else{
        x.slideDown();
        $('.singer').not(x).slideUp();
    }
    
})



let day=$('#days');
let hours=$('#hours');
let minutes=$('#minutes');
let seconds=$('#seconds');

// function dispalyDate(d,h,m,s)
// {
//     day.html(d);
//     hours.html(h);
//     minutes.html(m);
//     seconds.html(s);
// }

// dispalyDate(15,10,9,4)

let d=day.html();
let h=hours.html();
let m=minutes.html();
let s=seconds.html();
if(localStorage.getItem("second")!=null){
    s=localStorage.getItem("second")
}
if(localStorage.getItem("min")!=null){
m=localStorage.getItem("min")
}
if(localStorage.getItem("hour")!=null){
h=localStorage.getItem("hour")
}
if(localStorage.getItem("day")!=null){
d=localStorage.getItem('day')
}

setInterval(()=>{
    s--
    localStorage.setItem("second",s)
    seconds.html(s)
    minutes.html(m)
    hours.html(h)
    day.html(d)
    if(s==0){
        s=60;
        localStorage.setItem("second",s)
         m--
         localStorage.setItem("min",m)
         if(m==0){
            m=60
            localStorage.setItem("min",m)
             h--
             localStorage.setItem("hour",h)
             if(h==0){
                h=24
                localStorage.setItem("hour",h)
                d--
                localStorage.setItem("day",d)
             }
         }
          
    }
},1000)

let count=$('#count-char');
let countChar=$('#count-char').html();
$('#textArea').on( "input",
    function(e){
        if( (e.target.value.length)>=0 &&(e.target.value.length)<=99) {
            count.html(countChar-(e.target.value.length))
            console.log(e.target.value.length);
        }else if(e.target.value.length>=100){
                count.html("your available character finished ")
                console.log(e.target.value.length);
        }
    }

)

