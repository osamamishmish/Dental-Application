$(".save-button , .save-old , .categories , .opertive-container ,.post-core-container , .ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container ,.add-visit ,.glide-cont ,.cleaning-shaping-cont").hide();
$(".edit-button , .accordion").addClass("hide");



//Add new Data
$(function(){
    $(".add").on("click",function(){
        $(".add-data ,.old").removeClass("hide");
        $(".show-data ,.card").addClass("hide");
        $("textarea").val("");
        $("input[type='text']").val("");
        $(".add-visit").hide();
        
        $(".categories , .opertive-container ,.post-core-container ,.ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container ,.glide-cont .cleaning-shaping-cont ,.extraction-container ,.implant-container ").hide();
       
    });
    
})


//Home
$(".home").on("click",function(){
    $(".add-data, .show-data , .card , .accordion , .history-container , .visits-info , .history-container").addClass("hide");
    $(".add , .old").show();
    $("textarea").val("");
    $("input[type='text']").val("");
    $(".add-visit").hide();
    $(".categories , .opertive-container ,.post-core-container ,.ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container .glide-cont .cleaning-shaping-cont ,.extraction-container ,.implant-container ").hide();
    
})



//add new patient
$(".add-patient").on("click",function(){
    if($("#input-name").val()==""||$("#input-phone").val()==""){
        if($("#input-name").val()==""){
                $(".name-warning").text("please enter patient name");
            }else{
                $(".name-warning").text(" ");
            }
            if($("#input-phone").val()==""){
                $(".phone-warning").text("please enter phone number");
        
            }else{
                $(".phone-warning").text(" ");
            }
    }else{
        
        $(".name-warning").text(" "); 
        $(".phone-warning").text(" "); 
    $("div[class='check-cont']").empty();
    fillDiseasesHistory();
    $(".first-row , .second-row").empty();
    addCategories();
    $(".save-button").show();
    $(".save-old , .categories , .category-parent ,.opertive-container ,.post-core-container ,.ortho-container ,.peudo-container ,.crown-container ,.extraction-container ,.implant-container ").hide();
    $(".add , .history-container ,.visits-info").addClass("hide");
    $(".add-visit").hide();
    $(".add-data , .card").toggleClass("hide");
    $(".card-data li button").addClass("info-buttons");
    $(".info").toggleClass("clicked");
    $(".history , .visits , .work").removeClass("clicked");
    $(".info-container").removeClass("hide");
    $(".info-style").eq(0).text("Name: "+$("#input-name").val());
        $(".info-style").eq(1).text("Age: "+$("#input-age").val());
        $(".info-style").eq(2).text("Gender: "+$("#input-gender").val());
        $(".info-style").eq(3).text("Date: "+$("#input-date").val());
        $(".info-style").eq(4).text("Phone Number: "+$("#input-phone").val());
       $(".accordion-item").length=4;
    }
});


//Personal Info
$(".info").on("click",function(){
    $(this).removeClass("hide");
    $(this).toggleClass("clicked");
    $(".history ,.visits ,.work").removeClass("clicked");
    $(".history-container ,.accordion ,.visits-info ").addClass("hide");
    $(".add-visit").hide();
    $(".info-container").removeClass("hide");
    $(".categories ,.opertive-container ,.post-core-container ,.ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container ,.glide-cont ,.cleaning-shaping-cont ,.extraction-container ,.implant-container").hide();
});


//Visits
$(".visits").on("click",function(){
    $(this).toggleClass("clicked");
    $('.history-container ,.info-container').addClass("hide");
    $(".info ,.history , .work").removeClass("clicked");
    $(".accordion ,.visits-info").removeClass("hide");
           if($(".accordion-item").length===10){
               $(".add-visit").hide();
           }else{
               $(".add-visit").show();
           }
    
    $(".categories ,.opertive-container ,.post-core-container ,.ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container ,.glide-cont ,.cleaning-shaping-cont ,.extraction-container ,.implant-container").hide();
})


//work
$(".work").on("click",function(){
    $(this).toggleClass("clicked");
    $('.history-container ,.info-container ,.accordion ,.visits-info').addClass("hide");
    $(".add-visit").hide();
    $(".info ,.history , .visits").removeClass("clicked");
    $(".categories").show();
    $(".opertive-container ,.post-core-container ,.ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container ,.glide-cont ,.cleaning-shaping-cont ,.extraction-container ,.implant-container").hide();
});


//Search Old Patients
$(".old").on("click",function(){
    $(".show-data").removeClass("hide");
    $(".add-data").addClass("hide");
    $(".add-visit").hide();
    $(".card").addClass("hide");
     $(".add").removeClass("hide");
     $("textarea").val("");
        $("input[type='text']").val("");
        
        $(".opertive-container , .post-core-container ,.ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container ,.glide-cont ,.cleaning-shaping-cont ,.extraction-container ,.implant-container").hide();
    
});



//History
$(".history").on("click",function(){
    $(this).toggleClass("clicked");
    $(".info-container").addClass("hide");
    $(".history-container").removeClass("hide");
    
    $(".info ,.visits ,.work").removeClass("clicked");
    $(".accordion").addClass("hide");
    $(".add-visit").hide();
    $(".categories").hide();
    $(".opertive-container ,.post-core-container ,.ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container ,.glide-cont ,.cleaning-shaping-cont ,.extraction-container ,.implant-container").hide();

   
});














