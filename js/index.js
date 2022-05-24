
let personalInfo=[];
let history=[];
let visits=[];

    
    
   
$(".save-button").addClass("hide");
$(".edit-button").addClass("hide");
$(".accordion").addClass("hide");
$(function(){
    $(".add").on("click",function(){
        $(".add-data").removeClass("hide");
        $(".show-data").addClass("hide");
        $(".old").removeClass("hide");
        $("textarea").val("");
        $("input[type='text']").val("");
        
    });
    
})



//Home
$(".home").on("click",function(){
    $(".add-data").addClass("hide");
    $(".show-data").addClass("hide");
    $(".card").addClass("hide");
    $(".add").show();
    $(".old").show();
    $(".accordion").addClass("hide");
    $("textarea").val("");
        $("input[type='text']").val("");
        $(".history-container").addClass("hide");
    // $(".the-check").addClass("hide");
})





//Add personal Information
function addInfo(){
    for (let index=0;index<5;index++){
        let info=document.createElement("h5");
        let infoContainer=document.createElement('div');
        $(info).appendTo(infoContainer);
        $(info).addClass("info-style");
        $(infoContainer).addClass("info-container");
        // $(".info-container").addClass("hide");
        $(infoContainer).prependTo(".card-body");
        $(".info-style").eq(0).text("Name: "+$("#input-name").val());
        $(".info-style").eq(1).text("Age: "+$("#input-age").val());
        $(".info-style").eq(2).text("Gender: "+$("#input-gender").val());
        $(".info-style").eq(3).text("Date: "+$("#input-date").val());
        $(".info-style").eq(4).text("Phone Number: "+$("#input-phone").val());

    }
}
addInfo();

//Add diseases history
function historyInfo(){
    let historyContainer=document.createElement("div");
    
    $(historyContainer).prependTo(".card-body");
    $(historyContainer).addClass("history-container");
    // $(".history-container").addClass("hide");
    for(let index=0;index<4;index++){
        let container=document.createElement("div");
        let diseases=document.createElement("h6");
        // let checkContainer=document.createElement("div");

        let commentsCont=document.createElement("div");
        let historyComments=document.createElement("textarea");
        let checkContainer=document.createElement("div");
        
        $(diseases).appendTo(container).addClass("diseases");
        $(historyComments).appendTo(commentsCont).addClass("comments-field");
        $(commentsCont).appendTo(container).addClass("comments-container");
        // $(checkContainer).appendTo(container).addClass("check-cont");
        $(container).appendTo(historyContainer).addClass("diseases-cont");
        $(checkContainer).appendTo($(".diseases-cont").eq(index)).addClass("check-cont");
        // for(let x=0;x<2;x++){
        //     let checkField=document.createElement("input");
        //     let checkLabel=document.createElement("label");
        //     $(checkField).appendTo(checkContainer);
        //     $(checkLabel).appendTo(checkContainer);
        //     checkField.type="radio";
        //     $(checkField).addClass('check-field');
            
        //     $(checkLabel).addClass("label");
        //     $(checkContainer).children().eq(1).text("Yes");
        //     $(checkContainer).children().eq(3).text("No");
        //     $(checkContainer).children().eq(0).val("Yes").attr("name",history.length+index);
        //     $(checkContainer).children().eq(2).val("No").attr("name",history.length+index);
            
        //     $(checkField).on('click',function(){
        //         $(this).attr("checked",true);
        //         $(this).siblings("input[type='radio']").attr("checked",false);
        //         $(this).parent().attr("value",$(this).val());
        //         console.log($(this).val());

        //     })
            
           
        // }
        $(".diseases").eq(0).text("Diabetic Patient :");
        $(".diseases").eq(1).text("Hypertensive patient :");
        $(".diseases").eq(2).text("Hepatic patient :");
        $(".diseases").eq(3).text("Gland disease :");
    }
}
historyInfo();

function fillDiseasesHistory(){
    for (let x=0;x<4;x++){
        // let checkContainer=document.createElement("div");
        // $(checkContainer).appendTo($(".diseases-cont").eq(x)).addClass("check-cont");
        for(let i=0;i<2;i++){
            let checkField=document.createElement("input");
            let checkLabel=document.createElement("label");
            $(checkField).appendTo($(".check-cont").eq(x));
            $(checkLabel).appendTo($(".check-cont").eq(x));
            checkField.type="radio";
            $(checkField).addClass('check-field');
            
            $(checkLabel).addClass("label");
            $(".check-cont").eq(x).children().eq(1).text("Yes");
            $(".check-cont").eq(x).children().eq(3).text("No");
            $(".check-cont").eq(x).children().eq(0).val("Yes").attr("name",history.length+x);
            $(".check-cont").eq(x).children().eq(2).val("No").attr("name",history.length+x);
            
            $(checkField).on('click',function(){
                $(this).attr("checked",true);
                $(this).siblings("input[type='radio']").attr("checked",false);
                $(this).parent().attr("value",$(this).val());
                console.log($(this).val());

            })
            
           
        }
    }
}


let index=0;


//add new patient
$(".add-patient").on("click",function(){
    $("div[class='check-cont']").empty();
    fillDiseasesHistory();
    $(".add").addClass("hide");
    $(".history-container").addClass("hide");
    $(".add-data").toggleClass("hide");
     $(".card").toggleClass("hide");
    //  $(".the-check").addClass("hide");
    $('.visits-info').addClass("hide");
    $(".card-data li button").addClass("info-buttons");
    $(".info").toggleClass("clicked");
    $(".history , .visits , .endo").removeClass("clicked");
    $(".info-container").removeClass("hide");
    $(".info-style").eq(0).text("Name: "+$("#input-name").val());
        $(".info-style").eq(1).text("Age: "+$("#input-age").val());
        $(".info-style").eq(2).text("Gender: "+$("#input-gender").val());
        $(".info-style").eq(3).text("Date: "+$("#input-date").val());
        $(".info-style").eq(4).text("Phone Number: "+$("#input-phone").val());
        $(".edit-button").removeClass("hide");
       
  

//Diseases history
// $(".history").on("click",function(){
//     $(this).toggleClass("clicked");
//     $(".info-container").addClass("hide");
//     // $("div[class='check-cont']").empty();
//     $("input[class='check-field']").removeClass("hide");
//     $("label[class='label']").show();
//     $("p[class='the-check']").hide();
//     $(".history-container").removeClass("hide");
//     $(".the-check").addClass("hide");
//     $(".info ,.visits ,.endo").removeClass("clicked");
//     $(".history").addClass("clicked");
//     $(".accordion").addClass("hide");
//     $(".save-button").addClass("hide");
//     $(".edit-button").addClass("hide");
//     $('.visits-info').addClass("hide");
    
// });


    //Home
$(".home").on("click",function(){
    $(".add-data").addClass("hide");
    $(".show-data").addClass("hide");
    $(".card").addClass("hide");
    $(".add").show();
    $(".old").show();
    $(".accordion").addClass("hide");
    $('.visits-info').addClass("hide");
    $(".history-container").addClass("hide");
    
})
   
})


//Personal Info
$(".info").on("click",function(){
    $(this).removeClass("hide");
    $(this).toggleClass("clicked");
    $(".history ,.visits").removeClass("clicked");
    $(".history-container").addClass("hide");
    $(".info-container").removeClass("hide");
    $(".accordion").addClass("hide");
    $(".save-button").addClass("hide");
    $(".edit-button").removeClass("hide");
    $('.visits-info').addClass("hide");
})




//Visits
$(".visits").on("click",function(){
    $(this).toggleClass("clicked");
    $('.history-container').addClass("hide");
    $(".info-container").addClass("hide");
    $(".info ,.history , .endo").removeClass("clicked");
    $(".accordion").removeClass("hide");
    $(".save-button").addClass("hide");
    $(".edit-button").addClass("hide");
    $('.visits-info').removeClass("hide");
})


//Endo
$(".endo").on("click",function(){
    $(this).toggleClass("clicked");
    $(".save-button").removeClass("hide");
    $('.history-container').addClass("hide");
    $(".info-container").addClass("hide");
    $(".accordion").addClass("hide");
    $(".info ,.history , .visits").removeClass("clicked");
    $(".edit-button").addClass("hide");
    $('.visits-info').addClass("hide");
});



//Edit Info
$(".edit-button").on("click",function(){
    $(".add-data").toggleClass("hide");
     $(".card").toggleClass("hide");
})




//save Data
$(".save-button").on("click",function(){

    $(this).addClass("hide");
    $(".add-data").toggleClass("hide");
    $(".card").toggleClass("hide");
    personalInfo.push({
        name:$("#input-name").val(),
        age:$("#input-age").val(),
        gender:$("#input-gender").val(),
        date:$("#input-date").val(),
        phone:$("#input-phone").val()
    });
    

    history.push({
        Diabetic:$(".diseases").eq(0).siblings().eq(1).attr("value"),
        DiabeticComment:$(".comments-container").eq(0).children().val(),
        Hypertensive:$(".diseases").eq(1).siblings().eq(1).attr("value"),
        HypertensiveComment:$(".comments-container").eq(1).children().val(),
        Hepatic:$(".diseases").eq(2).siblings().eq(1).attr("value"),
        HepaticComment:$(".comments-container").eq(2).children().val(),
        Gland:$(".diseases").eq(3).siblings().eq(1).attr("value"),
        GlandComment:$(".comments-container").eq(3).children().val()
    });
    visits.push({
        firstDate:$(".first-date").val(),
        firstNotes:$(".first-notes").val(),
        secondDate:$(".second-date").val(),
        secondNotes:$(".second-notes").val(),
        thirdDate:$(".third-date").val(),
        thirdNotes:$(".third-notes").val(),
        fourthDate:$(".fourth-date").val(),
        fourthNotes:$(".fourth-notes").val()
        
    });
    $("input[type='text']").val("");
    $("textarea").val("");
   
})





//Search Old Patients
$(".old").on("click",function(){
    $(".show-data").removeClass("hide");
    $(".add-data").addClass("hide");
    $(".card").addClass("hide");
     $(".add").removeClass("hide");
     $("textarea").val("");
        $("input[type='text']").val("");
    //  $(".the-check").addClass("hide");
});




function historyCheck(){
    "use strict";
    for(let i=0 ; i<4;i++){
        let diseasesCheck=document.createElement("p");
        $(diseasesCheck).appendTo($(".check-cont").eq(i)).addClass("the-check");
    }
}




//Get patient info
$(".search").on("click",function(){
    $("div[class='check-cont']").empty();
    historyCheck();
    for(let index=0 ; index<personalInfo.length ; index++){
        if($(".old-patient-number").val()==personalInfo[index].phone || $(".old-patient-name").val()==personalInfo[index].name){
            $(".card").removeClass('hide');
            $(".info").addClass("clicked");
            $(".history ,.visits ,.endo").removeClass("clicked");
            $(".history-container").addClass("hide");
            $(".info-container").removeClass("hide");
            $(".accordion").addClass("hide");
            $(".save-button").addClass("hide");
            $(".edit-button").removeClass("hide");
            $(".show-data").addClass("hide");
            

            //PersonalInfo
            $(".info-style").eq(0).text("Name :"+personalInfo[index].name);
            $(".info-style").eq(1).text("Age :"+personalInfo[index].age);
            $(".info-style").eq(2).text("Gender :"+personalInfo[index].gender);
            $(".info-style").eq(3).text("Date :"+personalInfo[index].date);
            $(".info-style").eq(4).text("Phone :"+personalInfo[index].phone);
            $(".comments-container textarea").eq(0).val(history[index].DiabeticComment);
            $(".comments-container textarea").eq(1).val(history[index].HypertensiveComment);
            $(".comments-container textarea").eq(2).val(history[index].HepaticComment);
            $(".comments-container textarea").eq(3).val(history[index].GlandComment);
            $(".first-date").val(visits[index].firstDate);
            $(".first-notes").val(visits[index].firstNotes);
            $(".second-date").val(visits[index].secondDate);
            $(".second-notes").val(visits[index].secondNotes);
            $(".third-date").val(visits[index].thirdDate);
            $(".third-notes").val(visits[index].thirdNotes);
            $(".fourth-date").val(visits[index].fourthDate);
            $(".fourth-notes").val(visits[index].fourthNotes);

            

        
            
            
            if(history[index].Diabetic=="Yes"){
                $(".the-check").eq(0).text("Yes");
                
            }else{
                $(".the-check").eq(0).text("No");
            }
            if(history[index].Hypertensive=="Yes"){
                $(".the-check").eq(1).text("Yes");
            }else{
                $(".the-check").eq(1).text("No");
            }
            if(history[index].Hepatic=="Yes"){
                $(".the-check").eq(2).text("Yes");
            }else{
                $(".the-check").eq(2).text("No");
            }
            if(history[index].Gland=="Yes"){
                $(".the-check").eq(3).text("Yes");
            }else{
                $(".the-check").eq(3).text("No");
            }
            
        



        }  
    }
    $(".home").on("click",function(){
        $(".add-data").addClass("hide");
        $(".show-data").addClass("hide");
        $(".card").addClass("hide");
        $(".add").show();
        $(".old").show();
        $(".accordion").addClass("hide");
        $('.visits-info').addClass("hide");
        $("textarea").val("");
        $("input[type='text']").val("");
        // $(".the-check").addClass("hide");
    })
    $(".add").on('click',function(){
        $(".card").addClass("hide");
        $(".add-data").removeClass("hide");
            $(".show-data").addClass("hide");
            $(".old").removeClass("hide");
            $("textarea").val("");
        $("input[type='text']").val("");
        
    
    })
})

$(".history").on("click",function(){
    $(this).toggleClass("clicked");
    $(".info-container").addClass("hide");
    $(".history-container").removeClass("hide");
    
    $(".info ,.visits ,.endo").removeClass("clicked");
    $(".accordion").addClass("hide");
    $(".save-button").addClass("hide");
    $(".edit-button").addClass("hide");
// if($(".add-patient").is("clicked")){
//     $("input[class='check-field']").show();
//     $("label[class='label']").show();
//     $("p[class='the-check']").hide();
// }if($(".search").is("clicked")){
//     $("input[class='check-field']").hide();
//     $("label[class='label']").hide();
//     $("p[class='the-check']").show();
// }
});


console.log(personalInfo);
console.log(history);
console.log(visits);