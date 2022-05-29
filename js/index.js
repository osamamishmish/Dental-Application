
let personalInfo=[];
let history=[];
let visits=[];
let work=[];
let workStatus=[
    "Opertive",
    "Endodontic Treatment",
    "Post & Core",
    "Crown",
    "Removable",
    "Implant",
    "Extraction",
    "Peudo",
    "Scaling & Polishing",
    "Orthodontics"
];
let opertive=["Composite","Amalgum","Glass ionmer"];  
let postCore=["fiberPost","metalPost","custom made post"];
let crown=["primary impression","reduction","secondary impression","try in","cementation"];
let removable=["partial","complete"];
let peudo=["pulptomy","pulpectomy"];
let orthoDontics=["upper arch","lower arch","Both arches"];  
let opertiveWork=[];

 

$(".save-button , .save-old , .categories , .opertive-container").hide();
$(".edit-button , .accordion").addClass("hide");



//Add new Data
$(function(){
    $(".add").on("click",function(){
        $(".add-data ,.old").removeClass("hide");
        $(".show-data ,.card").addClass("hide");
        $("textarea").val("");
        $("input[type='text']").val("");
        
        $(".categories , .opertive-container").hide();
       
    });
    
})



//Home
$(".home").on("click",function(){
    $(".add-data, .show-data , .card , .accordion , .history-container , .visits-info , .history-container").addClass("hide");
    $(".add , .old").show();
    $("textarea").val("");
    $("input[type='text']").val("");
    $(".categories , .opertive-container ").hide();
    
})



let formCategories=["Name","Age","Gender","Date","Phone Number"];
let formInputs=[
    $("#input-name").val(),
    $("#input-age").val(),
    $("#input-gender").val(),
    $("#input-date").val(),
    $("#input-phone").val()
];

//Add personal Information
function addInfo(){
    for (let index=0;index<formCategories.length;index++){
        let info=document.createElement("h5");
        let infoContainer=document.createElement('div');
        $(info).appendTo(infoContainer);
        $(info).addClass("info-style");
        $(infoContainer).addClass("info-container");
        $(infoContainer).prependTo(".card-body");
        $(".info-style").eq(index).text(formCategories[index]+": "+formInputs[index]);
    }
}
addInfo();





let diseasesName=[
    "Diabetic Patient",
    "Hypertensive patient",
    "Hepatic patient",
    "Gland disease"
];

//Add diseases history
function historyInfo(){
    let historyContainer=document.createElement("div");
    
    $(historyContainer).prependTo(".card-body");
    $(historyContainer).addClass("history-container");
    for(let index=0;index<4;index++){
        let container=document.createElement("div");
        let diseases=document.createElement("h6");
        let commentsCont=document.createElement("div");
        let historyComments=document.createElement("textarea");
        let checkContainer=document.createElement("div");
        
        $(diseases).appendTo(container).addClass("diseases");
        $(historyComments).appendTo(commentsCont).addClass("comments-field");
        $(commentsCont).appendTo(container).addClass("comments-container");
        $(container).appendTo(historyContainer).addClass("diseases-cont");
        $(checkContainer).appendTo($(".diseases-cont").eq(index)).addClass("check-cont");
        $(".diseases").eq(index).text(diseasesName[index]);
    }
}
historyInfo();



//Get Diseases History
function fillDiseasesHistory(){
    for (let x=0;x<4;x++){
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


let categoryClass=[
    "opertive",
    "endo",
    "post-core",
    "crown",
    "removeble",
    "implant",
    "extraction",
    "peudo",
    "scaling-polishing",
    "ortho"
];

function addCategories(){
    for(let index=0 ;index<workStatus.length ; index++){
        let container=document.createElement("div"),
            checkBox=document.createElement("input"),
            category=document.createElement("h5");
        checkBox.type="checkbox";
        $(container).addClass("check");
        $(checkBox).addClass("check-box").appendTo(container).on("click",function(){
            if(this.checked){
                $(this).parent().attr("checked",true);
            }
            else if(!(this.checked)){
                $(this).parent().attr("checked",false);
            }
        });
        $(category).addClass(categoryClass[index]).text(workStatus[index]).prependTo(container);
        if(index<5){
            $(container).appendTo(".first-row");
        }else{
            $(container).appendTo(".second-row");
        }
        //show opertive categories
$('.opertive').on("click",function(){
    
    
    $(".categories").hide();
    $(".opertive-container").show();
    $(".category-parent").show();
});
    }
}




//add new patient
$(".add-patient").on("click",function(){
    $("div[class='check-cont']").empty();
    fillDiseasesHistory();
    $(".first-row , .second-row").empty();
    addCategories();
    $(".save-button").show();
    $(".save-old , .categories , .category-parent ,.opertive-container").hide();
    $(".add , .history-container ,.visits-info").addClass("hide");
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
       
});


//Personal Info
$(".info").on("click",function(){
    $(this).removeClass("hide");
    $(this).toggleClass("clicked");
    $(".history ,.visits ,.work").removeClass("clicked");
    $(".history-container ,.accordion ,.visits-info").addClass("hide");
    $(".info-container").removeClass("hide");
    $(".categories ,.opertive-container").hide();
});


//Visits
$(".visits").on("click",function(){
    $(this).toggleClass("clicked");
    $('.history-container ,.info-container').addClass("hide");
    $(".info ,.history , .work").removeClass("clicked");
    $(".accordion ,.visits-info").removeClass("hide");
    $(".categories ,.opertive-container").hide();
})


//work
$(".work").on("click",function(){
    $(this).toggleClass("clicked");
    $('.history-container ,.info-container ,.accordion ,.visits-info').addClass("hide");
    $(".info ,.history , .visits").removeClass("clicked");
    $(".categories").show();
    $(".opertive-container").hide();
});






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
   
    work.push({
        OpertiveStatus:$(".check").eq(0).attr("checked"),
        EndodonticTreatmentStatus:$(".check").eq(1).attr("checked"),
        PostCoreStatus:$(".check").eq(2).attr("checked"),
        CrownStatus:$(".check").eq(3).attr("checked"),
        RemovableStatus:$(".check").eq(4).attr("checked"),
        ImplantStatus:$(".check").eq(5).attr("checked"),
        ExtractionStatus:$(".check").eq(6).attr("checked"),
        PeudoStatus:$(".check").eq(7).attr("checked"),
        ScalingPolishingStatus:$(".check").eq(8).attr("checked"),
        OrthoDonticsStatus:$(".check").eq(9).attr("checked")
        
    });
    opertiveWork.push({
        composite:$(".category-parent").eq(0).attr("checked"),
        amalgum:$(".category-parent").eq(1).attr("checked"),
        glassIonmers:$(".category-parent").eq(2).attr("checked")
    });

    $("input[type='text']").val("");
    $("textarea").val("");
   
        let theOpertiveCheck=document.querySelectorAll(".opertive-check");
        for(let x=0;x<$("input[class='opertive-check']").length;x++){
            theOpertiveCheck[x].checked=false;
            $(theOpertiveCheck).eq(x).parent().attr("checked",false);
        }
         $(".opertive-container").hide();
        
})





//Search Old Patients
$(".old").on("click",function(){
    $(".show-data").removeClass("hide");
    $(".add-data").addClass("hide");
    $(".card").addClass("hide");
     $(".add").removeClass("hide");
     $("textarea").val("");
        $("input[type='text']").val("");
        
        $(".opertive-container").hide();
    
});




function historyCheck(){
    "use strict";
    for(let i=0 ; i<4;i++){
        let diseasesCheck=document.createElement("p");
        $(diseasesCheck).appendTo($(".check-cont").eq(i)).addClass("the-check");
    }
}


let theIndex;

//Get patient info
$(".search").on("click",function(){
    $("div[class='check-cont']").empty();
    $(".opertive-container").hide();
    historyCheck();
    for(let index=0 ; index<personalInfo.length ; index++){
        if($(".old-patient-number").val()==personalInfo[index].phone || $(".old-patient-name").val()==personalInfo[index].name){
            theIndex=index;
            console.log(theIndex);
            console.log(index);
            $(".first-row , .second-row").empty();
            addCategories();
            $(".save-old").show();
            $(".save-button").hide();
            $(".card").removeClass('hide');
            $(".info").addClass("clicked");
            $(".history ,.visits ,.work").removeClass("clicked");
            $(".history-container").addClass("hide");
            $(".categories").hide();
            $(".info-container").removeClass("hide");
            $(".opertive-container").hide();
            $(".accordion").addClass("hide");
            $(".save-button").addClass("hide");
            $(".edit-button").removeClass("hide");
            $(".show-data").addClass("hide");

            
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



            //All categories
            let categories=document.querySelectorAll(".check-box");
            
            if(work[index].OpertiveStatus=="checked"){
                categories[0].checked=true;
                $(".check").eq(0).attr("checked",true);
            }else{
                categories[0].checked=false;
                $(".check").eq(0).attr("checked",false);
            }
        
            if(work[index].EndodonticTreatmentStatus=="checked"){
                categories[1].checked=true;
                $(".check").eq(1).attr("checked",true);
            }else{
                categories[1].checked=false;
                $(".check").eq(1).attr("checked",false);
            }
            if(work[index].PostCoreStatus=="checked"){
                categories[2].checked=true;
                $(".check").eq(2).attr("checked",true);
            }else{
                categories[2].checked=false;
                $(".check").eq(2).attr("checked",false);
            }
            if(work[index].CrownStatus=="checked"){
                categories[3].checked=true;
                $(".check").eq(3).attr("checked",true);
            }else{
                categories[3].checked=false;
                $(".check").eq(3).attr("checked",false);
            }
            if(work[index].RemovableStatus=="checked"){
                categories[4].checked=true;
                $(".check").eq(4).attr("checked",true);
            }else{
                categories[4].checked=false;
                $(".check").eq(4).attr("checked",false);
            }
            if(work[index].ImplantStatus=="checked"){
                categories[5].checked=true;
                $(".check").eq(5).attr("checked",true);
            }else{
                categories[5].checked=false;
                $(".check").eq(5).attr("checked",false);
            }
            if(work[index].ExtractionStatus=="checked"){
                categories[6].checked=true;
                $(".check").eq(6).attr("checked",true);
            }else{
                categories[6].checked=false;
                $(".check").eq(6).attr("checked",false);
            }
            if(work[index].PeudoStatus=="checked"){
                categories[7].checked=true;
                $(".check").eq(7).attr("checked",true);
            }else{
                categories[7].checked=false;
                $(".check").eq(7).attr("checked",false);
            }
            if(work[index].ScalingPolishingStatus=="checked"){
                categories[8].checked=true;
                $(".check").eq(8).attr("checked",true);
            }else{
                categories[8].checked=false;
                $(".check").eq(8).attr("checked",false);
            }
            if(work[index].OrthoDonticsStatus=="checked"){
                categories[9].checked=true;
                $(".check").eq(9).attr("checked",true);
            }else{
                categories[9].checked=false;
                $(".check").eq(9).attr("checked",false);
            }




            //opertive categories
          let opertiveCheck=document.querySelectorAll(".opertive-check");  
       if(opertiveWork[index].composite=="checked"){
        opertiveCheck[0].checked=true;
        $('.category-parent').eq(0).attr("checked",true);
       }else{
         opertiveCheck[0].checked=false;
         $('.category-parent').eq(0).attr("checked",false);
       }
       if(opertiveWork[index].amalgum=="checked"){
         opertiveCheck[1].checked=true;
         $('.category-parent').eq(1).attr("checked",true);
        }else{
          opertiveCheck[1].checked=false;
          $('.category-parent').eq(1).attr("checked",false);
        }
        if(opertiveWork[index].glassIonmers=="checked"){
            opertiveCheck[2].checked=true;
            $('.category-parent').eq(2).attr("checked",true);
           }else{
             opertiveCheck[2].checked=false;
             $('.category-parent').eq(2).attr("checked",false);
           }
            
        }  
        
    }
    
  
})
     







      






//History
$(".history").on("click",function(){
    $(this).toggleClass("clicked");
    $(".info-container").addClass("hide");
    $(".history-container").removeClass("hide");
    
    $(".info ,.visits ,.work").removeClass("clicked");
    $(".accordion").addClass("hide");
    $(".categories").hide();
    $(".opertive-container").hide();

   
});




$("input[class='check-box']").on("click",function(){
    if(this.checked){
        $(this).parent().attr("checked",true);
    }
    else if(!(this.checked)){
        $(this).parent().attr("checked",false);
    }
});




//Opertive Categories
function opertiveCategories(){
    for(let index =0 ;index<opertive.length;index++){
        let opertiveCategories=document.createElement("h5"),
            categoriesChecking=document.createElement("input"),
            line=document.createElement("hr"),
            categoriesContainer=document.createElement("div");
        $(opertiveCategories).appendTo(categoriesContainer).addClass("opertive-cont").text(opertive[index]);
        $(categoriesChecking).appendTo(categoriesContainer).addClass("opertive-check").attr("type","checkbox").on("click",function(){
            if(this.checked){
                $(this).parent().attr("checked",true);
            }
            else if(!(this.checked)){
                $(this).parent().attr("checked",false);
            }
        });
         $(line).addClass("horizontal");
        $(".opertive-container").append(categoriesContainer);
        $(".opertive-container").append(line);  
         $(categoriesContainer).addClass("category-parent");

    }
};
opertiveCategories();









//Edit old data
$(".save-old").on("click",function(){
    $(".card").addClass("hide");
    $(this).addClass("hide");

    $(".show-data").toggleClass("hide");
    
    history[theIndex].DiabeticComment=$(".comments-container textarea").eq(0).val();
    history[theIndex].HypertensiveComment=$(".comments-container textarea").eq(1).val();
    history[theIndex].HepaticComment=$(".comments-container textarea").eq(2).val();
    history[theIndex].GlandComment=$(".comments-container textarea").eq(3).val();
    visits[theIndex].firstDate=$(".first-date").val();
    visits[theIndex].firstNotes=$(".first-notes").val();
    visits[theIndex].secondDate=$(".second-date").val();
    visits[theIndex].secondNotes=$(".second-notes").val();
    visits[theIndex].thirdDate=$(".third-date").val();
    visits[theIndex].thirdNotes=$(".third-notes").val();
    visits[theIndex].fourthDate=$(".fourth-date").val();
    visits[theIndex].fourthNotes=$(".fourth-notes").val();

    work[theIndex].OpertiveStatus=$(".check").eq(0).attr("checked");
    work[theIndex].EndodonticTreatmentStatus=$(".check").eq(1).attr("checked");
    work[theIndex].PostCoreStatus=$(".check").eq(2).attr("checked");
    work[theIndex].CrownStatus=$(".check").eq(3).attr("checked");
    work[theIndex].RemovableStatus=$(".check").eq(4).attr("checked");
    work[theIndex].ImplantStatus=$(".check").eq(5).attr("checked");
    work[theIndex].ExtractionStatus=$(".check").eq(6).attr("checked");
    work[theIndex].PeudoStatus=$(".check").eq(7).attr("checked");
    work[theIndex].ScalingPolishingStatus=$(".check").eq(8).attr("checked");
    work[theIndex].OrthoDonticsStatus=$(".check").eq(9).attr("checked");
    
    opertiveWork[theIndex].composite=$(".category-parent").eq(0).attr("checked");
    opertiveWork[theIndex].amalgum=$(".category-parent").eq(1).attr("checked");
    opertiveWork[theIndex].glassIonmers=$(".category-parent").eq(2).attr("checked");
   
    theIndex="";
    $("input[type='text']").val("");
    $("textarea").val("");
        let theOpertiveCheck=document.querySelectorAll(".opertive-check");
        for(let x=0;x<$("input[class='opertive-check']").length;x++){
                theOpertiveCheck[x].checked=false;
                $(theOpertiveCheck).eq(x).parent().attr("checked",false);
            }    
        
        $(".opertive-container").hide();
})




console.log(personalInfo);
console.log(history);
console.log(visits);
console.log(work);
console.log(opertiveWork);
console.log(theIndex);