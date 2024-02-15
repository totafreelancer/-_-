
//====== Date ======
$(document).ready(function(){
    const d = new Date();
    let date = document.getElementById("heading_date").innerHTML = d.toDateString();
    $("heading_date").html(date);
  });


//====== services ======
$(document).ready(function(){
    $("#services_btn1").click(function(){
        $(".services_btn2, .services_btn3, .services_btn4").removeClass("active");
        $(".services_btn2, .services_btn3, .services_btn4").addClass("services_nav");
        $(".services_btn1").addClass("active");
        $(".services_btn1").removeClass("services_nav");
        $("#services1").removeClass("remove");
        $("#services2, #services3, #services4").addClass("remove");
    });
    $("#services_btn2").click(function(){
        $(".services_btn1, .services_btn3, .services_btn4").removeClass("active");
        $(".services_btn1, .services_btn3, .services_btn4").addClass("services_nav");
        $(".services_btn2").addClass("active");
        $(".services_btn2").removeClass("services_nav");
        $("#services2").removeClass("remove");
        $("#services1, #services3, #services4").addClass("remove");
    });
    $("#services_btn3").click(function(){
        $(".services_btn2, .services_btn1, .services_btn4").removeClass("active");
        $(".services_btn2, .services_btn1, .services_btn4").addClass("services_nav");
        $(".services_btn3").addClass("active");
        $(".services_btn3").removeClass("services_nav");
        $("#services3").removeClass("remove");
        $("#services2, #services1, #services4").addClass("remove");
    });
    $("#services_btn4").click(function(){
        $(".services_btn2, .services_btn3, .services_btn1").removeClass("active");
        $(".services_btn2, .services_btn3, .services_btn1").addClass("services_nav");
        $(".services_btn4").addClass("active");
        $(".services_btn4").removeClass("services_nav");
        $("#services4").removeClass("remove");
        $("#services2, #services3, #services1").addClass("remove");
    });
  });
//====== services End ======




//======= nagorik_abedon =====
$(document).ready(function(){
   $("#nibondhon-btn").click(function(){
    $(".nibondhon").removeClass("form_hidden");
    $(".nagorig-log, .sngostha-log").addClass("form_hidden");
    $("#nibondhon-btn").addClass("actives");
    $("#nagorig-log, #sngostha-log").removeClass("actives");
  });
  $("#nagorig-log").click(function(){
    $(".nibondhon, .sngostha-log").addClass("form_hidden");
    $(".nagorig-log").removeClass("form_hidden");
    $("#nagorig-log").addClass("actives");
    $("#nibondhon-btn, #sngostha-log").removeClass("actives");
    $("#nagorig").removeClass("form_hidden");
  });
  $("#sngostha-log").click(function(){
    $(".sngostha-log").removeClass("form_hidden");
    $(".nagorig-log, .nibondhon").addClass("form_hidden");
    $("#sngostha-log").addClass("actives");
    $("#nagorig-log, #nibondhon-btn").removeClass("actives");
  });
});

//nagorig-log
$(document).ready(function(){
  $(".password-vul").click(function(){
   $("#nagorig2").removeClass("form_hidden");
   $("#nagorig").addClass("form_hidden");
 });
 $(".nibondhon_pag").click(function(){
  $("#form_1").removeClass("form_hidden");
  $("#nagorig2").addClass("form_hidden");

  $(".nibondhon").removeClass("form_hidden");
  $("#nibondhon-btn").addClass("actives");
  $("#nagorig-log, #sngostha-log").removeClass("actives");
});
});

//======= nagorik_abedon End =====



//=========checkValidity===========
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

//========= checkValidity End ===========


//========= FileUpload ========= 
$(document).ready(function(){
  $("#FileUpload").change(function(event){
    var x = URL.createObjectURL(event.target.files[0]);
    $("#upload_img").attr("src",x);
    $("#img_upload_p").hide();
    $("#upload_img").css("opacity", "1");
    console.log(event);
  });
});
//========= FileUpload End =========


//========= Nagorik_abedon start ===========
//========= Bivag 1 ===========

function show(anything){
  document.querySelector('#Menu_bivag_btn').value = anything;
}


(() => {
  const bivag_btn = document.querySelector("#Menu_bivag_btn");

  const Menu_bivag = document.querySelector(".Menu_bivag");
  const Dhaka_bivag = document.querySelector("#Dhaka_bivag");
  const Rajshahi_bivag = document.querySelector("#Rajshahi_bivag");

  const Rajshahi_menu = document.querySelector("#Rajshahi_menu");

  const Rajshahi = document.querySelector("#Rajshahi");
  const Natore = document.querySelector("#Natore");




  bivag_btn.addEventListener('click', () => {
    Menu_bivag.classList.toggle('Block');
  })

  Rajshahi_bivag.addEventListener('click', () => {
    Rajshahi_menu.classList.toggle('Block');
  })


  Natore.addEventListener('click', () => {
    Menu_bivag.classList.toggle('Block');
  })
  Rajshahi.addEventListener('click', () => {
    Menu_bivag.classList.toggle('Block');
  })

})();
//========= Bivag 1 ===========

//========= Bivag 2 ===========

function show2(anything){
  document.querySelector('#Menu_bivag_btn2').value = anything;
}

(() => {
  const bivag_btn2 = document.querySelector("#Menu_bivag_btn2");

  const Menu_bivag2 = document.querySelector(".Menu_bivag2");
  const Dhaka_bivag2 = document.querySelector("#Dhaka_bivag2");
  const Rajshahi_bivag2 = document.querySelector("#Rajshahi_bivag2");

  const Rajshahi_menu2 = document.querySelector("#Rajshahi_menu2");

  const Rajshahi2 = document.querySelector("#Rajshahi2");
  const Natore2 = document.querySelector("#Natore2");


  bivag_btn2.addEventListener('click', () => {
    Menu_bivag2.classList.toggle('Block');
  })

  Rajshahi_bivag2.addEventListener('click', () => {
    Rajshahi_menu2.classList.toggle('Block');
  })


  Natore2.addEventListener('click', () => {
    Menu_bivag2.classList.toggle('Block');
  })
  Rajshahi2.addEventListener('click', () => {
    Menu_bivag2.classList.toggle('Block');
  })

})();
//========= Bivag 2 ===========

//========= Bivag 3 ===========

function show3(anything){
  document.querySelector('#Menu_bivag_btn3').value = anything;
}

(() => {
  const bivag_btn3 = document.querySelector("#Menu_bivag_btn3");

  const Menu_bivag3 = document.querySelector(".Menu_bivag3");
  const Dhaka_bivag3 = document.querySelector("#Dhaka_bivag3");
  const Rajshahi_bivag3 = document.querySelector("#Rajshahi_bivag3");

  const Rajshahi_menu3 = document.querySelector("#Rajshahi_menu3");

  const Rajshahi3 = document.querySelector("#Rajshahi3");
  const Natore3 = document.querySelector("#Natore3");


  bivag_btn3.addEventListener('click', () => {
    Menu_bivag3.classList.toggle('Block');
  })

  Rajshahi_bivag3.addEventListener('click', () => {
    Rajshahi_menu3.classList.toggle('Block');
  })


  Natore3.addEventListener('click', () => {
    Menu_bivag3.classList.toggle('Block');
  })
  Rajshahi3.addEventListener('click', () => {
    Menu_bivag3.classList.toggle('Block');
  })

})();
//========= Bivag 3 ===========

//========= Bivag 4 ===========

function show4(anything){
  document.querySelector('#Menu_bivag_btn4').value = anything;
}

(() => {
  const bivag_btn4 = document.querySelector("#Menu_bivag_btn4");

  const Menu_bivag4 = document.querySelector(".Menu_bivag4");
  const Dhaka_bivag4 = document.querySelector("#Dhaka_bivag4");
  const Rajshahi_bivag4 = document.querySelector("#Rajshahi_bivag4");

  const Rajshahi_menu4 = document.querySelector("#Rajshahi_menu4");

  const Rajshahi4 = document.querySelector("#Rajshahi4");
  const Natore4 = document.querySelector("#Natore4");


  bivag_btn4.addEventListener('click', () => {
    Menu_bivag4.classList.toggle('Block');
  })

  Rajshahi_bivag4.addEventListener('click', () => {
    Rajshahi_menu4.classList.toggle('Block');
  })


  Natore4.addEventListener('click', () => {
    Menu_bivag4.classList.toggle('Block');
  })
  Rajshahi4.addEventListener('click', () => {
    Menu_bivag4.classList.toggle('Block');
  })

})();
//========= Bivag 4 ===========



  function checkbox(e){
  let bivag_btn = document.querySelector(".permanent_address");
  bivag_btn.classList.toggle('None');
  }



//========= Nagorik_abedon End ===========


//========= tradeLicence start ===========


function add_btn(e){
  const delete_btn = document.querySelector("#delete_btn");
  const Onnaonno_malik = document.querySelector(".Onnaonno_malik");
  Onnaonno_malik.classList.add('Block');
  delete_btn.classList.add('Block');
  }

function delete_btn(e){
  const delete_btn = document.querySelector("#delete_btn");
  const Onnaonno_malik = document.querySelector(".Onnaonno_malik");
  Onnaonno_malik.classList.remove('Block');
  delete_btn.classList.remove('Block');
  }
    

//========= tradeLicence End ===========

//========= oyarisTalika start ===========


function DateOfDeath(e){
  const dateDeath = document.querySelector(".dateDeath");
  dateDeath.classList.toggle('None');
  }

  function oyarishAdd(e){
    const oyarishRemove = document.querySelector("#oyarishRemove");
    const Oyarish2 = document.querySelector(".Oyarish2");
    oyarishRemove.classList.add('Block');
    Oyarish2.classList.add('Block');
    }

    function oyarishRemove(e){
      const oyarishRemove = document.querySelector("#oyarishRemove");
      const Oyarish2 = document.querySelector(".Oyarish2");
      oyarishRemove.classList.remove('Block');
      Oyarish2.classList.remove('Block');
      }

//========= OyarisTalika End ===========


