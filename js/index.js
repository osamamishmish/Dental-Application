// var personalInfo=[{
//     info:[

//     ],
//     history:[

//     ],
//     visits:[

//     ],
//     Endo:[

//     ]
// }
// ];
let personalInfo=[];
let history=[];
let visits=[];

    
    
   
$(".save-button").addClass("hide");
$(".edit-button").addClass("hide");
$(".accordion").addClass("hide");
$(function(){
    $(".add").on("click",function(){
        $(".add-data").toggleClass("hide");
        
    })
})



//Home
$(".home").on("click",function(){
    $(".add-data").addClass("hide");
    // $(".header").removeClass("hide");
    $(".card").addClass("hide");
    $(".add").toggle();
    $(".accordion").addClass("hide");
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
        let checkContainer=document.createElement("div");
        let commentsCont=document.createElement("div");
        let historyComments=document.createElement("textarea");
        $(diseases).appendTo(container).addClass("diseases");
        $(historyComments).appendTo(commentsCont).addClass("comments-field");
        $(commentsCont).appendTo(container).addClass("comments-container");
        $(checkContainer).appendTo(container).addClass("check-cont");
        $(container).appendTo(historyContainer).addClass("diseases-cont");
        for(let x=0;x<2;x++){
            let checkField=document.createElement("input");
            let checkLabel=document.createElement("label");
            $(checkField).appendTo(checkContainer);
            $(checkLabel).appendTo(checkContainer);
            checkField.type="radio";
            $(checkField).addClass('check-field');
            
            $(checkLabel).addClass("label");
            $(checkContainer).children().eq(1).text("Yes");
            $(checkContainer).children().eq(3).text("No");
            $(checkContainer).children().eq(0).val("Yes").attr("name",history.length+index);
            $(checkContainer).children().eq(2).val("No").attr("name",history.length+index);
            
            $(checkField).on('click',function(){
                $(this).attr("checked",true);
                $(this).siblings("input[type='radio']").attr("checked",false);
                $(this).parent().attr("value",$(this).val());
                console.log($(this).val());

            })
            
           
        }
        $(".diseases").eq(0).text("Diabetic Patient :");
        $(".diseases").eq(1).text("Hypertensive patient :");
        $(".diseases").eq(2).text("Hepatic patient :");
        $(".diseases").eq(3).text("Gland disease :");
    }
}
historyInfo();


let index=0;


//add new patient
$(".add-patient").on("click",function(){
    $(".add").toggle();
    $(".history-container").addClass("hide");
    $(".add-data").toggleClass("hide");
     $(".card").toggleClass("hide");
    
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
    // let back=document.createElement("button");
    // $(back).appendTo(".card-body").addClass("btn").text("Edit info");

        $(".info").on("click",function(){
            $(this).removeClass("hide");
            $(this).toggleClass("clicked");
            $(".history ,.visits").removeClass("clicked");
            $(".history-container").addClass("hide");
            $(".info-container").removeClass("hide");
            $(".accordion").addClass("hide");
            $(".save-button").addClass("hide");
            $(".edit-button").removeClass("hide");
        })




    $(".history").on("click",function(){
        $(this).toggleClass("clicked");
        $(".info-container").addClass("hide");
        $(".history-container").removeClass("hide");
        $(".info ,.visits").removeClass("clicked");
        $(".accordion").addClass("hide");
        $(".save-button").addClass("hide");
        $(".edit-button").addClass("hide");
        
    });


    $(".visits").on("click",function(){
        $(this).toggleClass("clicked");
        $('.history-container').addClass("hide");
        $(".info-container").addClass("hide");
        $(".info ,.history , .endo").removeClass("clicked");
        $(".accordion").removeClass("hide");
        $(".save-button").addClass("hide");
        $(".edit-button").addClass("hide");
    })
    $(".endo").on("click",function(){
        $(this).toggleClass("clicked");
        $(".save-button").removeClass("hide");
        $('.history-container').addClass("hide");
        $(".info-container").addClass("hide");
        $(".accordion").addClass("hide");
        $(".info ,.history , .visits").removeClass("clicked");
        $(".edit-button").addClass("hide");
    })
   
    
})




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
        fourthNotes:$(".fourth-notes").val(),
        
    });
    $("input[type='text']").val("");
    $("textarea").val("");
   
})

console.log(personalInfo);
console.log(history);
console.log(visits);

