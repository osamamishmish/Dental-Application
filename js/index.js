var personalInfo=[{
    info:[

    ],
    history:[

    ],
    visits:[

    ],
    Endo:[

    ]
}
];
    
    
    
   
$(".save-button").addClass("hide");
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
        $(diseases).appendTo(container).addClass("diseases");
        $(checkContainer).appendTo(container).addClass("check-cont");
        $(container).appendTo(historyContainer).addClass("diseases-cont");
        for(let x=0;x<2;x++){
            let checkField=document.createElement("input");
            let checkLabel=document.createElement("label");
            $(checkField).appendTo(checkContainer);
            $(checkLabel).appendTo(checkContainer);
            checkField.type="radio";
            
            $(checkLabel).addClass("label");
            $(checkContainer).children().eq(1).text("Yes");
            $(checkContainer).children().eq(3).text("No");
            $(checkContainer).children().eq(0).val("Yes").attr("name",index);
            $(checkContainer).children().eq(2).val("No").attr("name",index);
            
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
    

        $(".info").on("click",function(){
            $(this).removeClass("hide");
            $(this).toggleClass("clicked");
            $(".history ,.visits").removeClass("clicked");
            $(".history-container").addClass("hide");
            $(".info-container").removeClass("hide");
            $(".accordion").addClass("hide");
            $(".save-button").addClass("hide");
        })




    $(".history").on("click",function(){
        $(this).toggleClass("clicked");
        $(".info-container").addClass("hide");
        $(".history-container").removeClass("hide");
        $(".info ,.visits").removeClass("clicked");
        $(".accordion").addClass("hide");
        $(".save-button").addClass("hide");
        
    });


    $(".visits").on("click",function(){
        $(this).toggleClass("clicked");
        $('.history-container').addClass("hide");
        $(".info-container").addClass("hide");
        $(".info ,.history , .endo").removeClass("clicked");
        $(".accordion").removeClass("hide");
        $(".save-button").addClass("hide");
    })
    $(".endo").on("click",function(){
        $(this).toggleClass("clicked");
        $(".save-button").removeClass("hide");
        $('.history-container').addClass("hide");
        $(".info-container").addClass("hide");
        $(".accordion").addClass("hide");
        $(".info ,.history , .visits").removeClass("clicked");
    })
   
    
})



//save Data
$(".save-button").on("click",function(){

    $(this).addClass("hide");
    personalInfo[index].info.push({
        name:$("#input-name").val(),
        age:$("#input-age").val(),
        gender:$("#input-gender").val(),
        date:$("#input-date").val(),
        phone:$("#input-phone").val()
    });
    $("#input-name").val("");
    $("#input-age").val("");
    $("#input-gender").val("");
    $("#input-date").val("");
    $("#input-phone").val("");
    personalInfo[index].history.push({
        Diabetic:$(".diseases").eq(0).siblings().attr("value"),
        Hypertensive:$(".diseases").eq(1).siblings().attr("value"),
        Hepatic:$(".diseases").eq(2).siblings().attr("value"),
        Gland:$(".diseases").eq(3).siblings().attr("value")
    });
    personalInfo[index].visits.push({
        firstDate:$(".first-date").val(),
        firstNotes:$(".first-notes").val(),
        secondDate:$(".second-date").val(),
        secondNotes:$(".second-notes").val(),
        thirdDate:$(".third-date").val(),
        thirdNotes:$(".third-notes").val(),
        fourthDate:$(".fourth-date").val(),
        fourthNotes:$(".fourth-notes").val(),
        
    })
   index++; 
   personalInfo.length++;

})

console.log(personalInfo);

