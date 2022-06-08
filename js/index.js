
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
let orthoDontics=["upper arch","lower arch","Both arches"];  
let opertiveWork=[];
let postCoreWork=[];
let orthoWork=[];
let peudoWork=[];
let crownWork=[];
let removableWork=[];
let partialWork=[];
let completeWork=[];
let newVisits=[];
let thePatientVisits=[];
let endoWork=[];
$(".save-button , .save-old , .categories , .opertive-container ,.post-core-container , .ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container ,.add-visit").hide();
$(".edit-button , .accordion").addClass("hide");



//Add new Data
$(function(){
    $(".add").on("click",function(){
        $(".add-data ,.old").removeClass("hide");
        $(".show-data ,.card").addClass("hide");
        $("textarea").val("");
        $("input[type='text']").val("");
        $(".add-visit").hide();
        
        $(".categories , .opertive-container ,.post-core-container ,.ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container").hide();
       
    });
    
})




//Add new visits
let visitCounter=$(".accordion-item").length;
let theVisitContainer=document.querySelector(".new-visit-container");
$('.add-visit').on("click",function(){
    // visitCounter=$(".accordion-item").length;
  visitCounter++;
  if(visitCounter===10){
      $(".add-visit").hide();
  }else{
    $(".add-visit").show();
}
    $(".accordion-item").eq(0).clone().appendTo(".new-visit-container").addClass("the-added-visit");
    $(".new-visit-container").children().last().children().eq(0).children().children().text(visitCounter+"th"+" "+"visit");
    $(".the-added-visit").last().children().eq(0).attr("id","flush-heading"+visitCounter);
    $(".the-added-visit").last().children().eq(1).attr("id","flush-collapse"+visitCounter);
    $(".the-added-visit").last().children().eq(1).addClass(visitCounter+"th"+"-"+"visit").removeClass("first-visit");
    $(".the-added-visit").last().children().eq(0).children().attr("data-bs-target","#flush-collapse"+visitCounter);
    $(".the-added-visit").last().children().eq(0).children().attr("aria-controls","flush-collapse"+visitCounter);
    $(".the-added-visit").last().children().eq(1).attr("aria-labelledby","flush-heading"+visitCounter);
    $(".the-added-visit").last().children().eq(1).children().eq(0).children().eq(0).addClass(visitCounter+"th"+"-"+"date").removeClass("first-date").val("");
    $(".the-added-visit").last().children().eq(1).children().eq(1).children().eq(0).addClass(visitCounter+"th"+"-"+"note").removeClass("first-note").val("");
})








//Home
$(".home").on("click",function(){
    $(".add-data, .show-data , .card , .accordion , .history-container , .visits-info , .history-container").addClass("hide");
    $(".add , .old").show();
    $("textarea").val("");
    $("input[type='text']").val("");
    $(".add-visit").hide();
    $(".categories , .opertive-container ,.post-core-container ,.ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container").hide();
    
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
        let diseases=document.createElement("h4");
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
    "removable",
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

//show post and core categories
$(".post-core").on("click",function(){
    $(".categories").hide();
    $(".post-core-container").show();
    $(".post-core-parent").show();
});


$(".ortho").on("click",function(){
    $(".categories").hide();
    $(".ortho-container").show();
    $(".ortho-parent").show();
});


$(".peudo").on("click",function(){
    $(".categories").hide();
    $(".peudo-container").show();
    $(".peudo-parent").show();
});



$(".crown").on("click",function(){
    $(".categories").hide();
    $(".crown-container").show();
    $(".crown-parent").show();
});

$(".removable").on("click",function(){
    $(".categories").hide();
    $(".removable-container").show();
    $(".partial , .complete").hide();
   $(".removable-cat").show();
    
});
$(".partial-head h5").on("click",function(){
    $(".removable-container").show();
    $(".removable-cat").hide();
    $(".partial").show();
})
$(".complete-head h5").on("click",function(){
    $(".removable-container").show();
    $(".removable-cat").hide();
    $(".complete").show();
})
$(".endo").on("click",function(){
    $(".categories").hide();
    $(".endo-container").show();
   $(".endo-parent").show();
})



    }
}




//add new patient
$(".add-patient").on("click",function(){
    $("div[class='check-cont']").empty();
    fillDiseasesHistory();
    $(".first-row , .second-row").empty();
    addCategories();
    $(".save-button").show();
    $(".save-old , .categories , .category-parent ,.opertive-container ,.post-core-container ,.ortho-container ,.peudo-container ,.crown-container").hide();
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
       visitCounter=4;
});


//Personal Info
$(".info").on("click",function(){
    $(this).removeClass("hide");
    $(this).toggleClass("clicked");
    $(".history ,.visits ,.work").removeClass("clicked");
    $(".history-container ,.accordion ,.visits-info ").addClass("hide");
    $(".add-visit").hide();
    $(".info-container").removeClass("hide");
    $(".categories ,.opertive-container ,.post-core-container ,.ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container").hide();
});


//Visits
$(".visits").on("click",function(){
    $(this).toggleClass("clicked");
    $('.history-container ,.info-container').addClass("hide");
    $(".info ,.history , .work").removeClass("clicked");
    $(".accordion ,.visits-info").removeClass("hide");
    // visitCounter=$('.accordion-item').length;
           if(visitCounter===10){
               $(".add-visit").hide();
           }else{
               $(".add-visit").show();
           }
    // $(".add-visit").show();
    $(".categories ,.opertive-container ,.post-core-container ,.ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container").hide();
})


//work
$(".work").on("click",function(){
    $(this).toggleClass("clicked");
    $('.history-container ,.info-container ,.accordion ,.visits-info').addClass("hide");
    $(".add-visit").hide();
    $(".info ,.history , .visits").removeClass("clicked");
    $(".categories").show();
    $(".opertive-container ,.post-core-container ,.ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container").hide();
});









//save Data
$(".save-button").on("click",function(){

    $(this).addClass("hide");
    $(".add-data").toggleClass("hide");
    $(".card").toggleClass("hide");
    $(".add-visit").hide();
    
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
        fifthDate:$(".5th-date").val(),
        fifthNotes:$(".5th-note").val(),
        sixthDate:$(".6th-date").val(),
        sixthNotes:$(".6th-note").val(),
        seventhDate:$(".7th-date").val(),
        seventhNotes:$(".7th-note").val(),
        eigthDate:$(".8th-date").val(),
        eigthNotes:$(".8th-note").val(),
        ninthDate:$(".9th-date").val(),
        ninthNotes:$(".9th-note").val(),
        tenthDate:$(".10th-date").val(),
        tenthNotes:$(".10th-note").val()
        
        
    });
     thePatientVisits.push($(".the-added-visit").clone());
     $(".new-visit-container").empty();
    
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
    postCoreWork.push({
        fiberPost:$(".post-core-parent").eq(0).attr("checked"),
        metalPost:$(".post-core-parent").eq(1).attr("checked"),
        customMadePost:$(".post-core-parent").eq(2).attr("checked")
    });
    orthoWork.push({
        upperArch:$(".ortho-parent").eq(0).attr("checked"),
        lowerArch:$(".ortho-parent").eq(1).attr("checked"),
        bothArches:$(".ortho-parent").eq(2).attr("checked")
    });
    peudoWork.push({
        pulptomy:$(".peudo-parent").eq(0).attr("checked"),
        pulpectomy:$(".peudo-parent").eq(1).attr("checked")
    });


    crownWork.push({
        primaryImpression:$(".crown-parent").eq(0).attr("checked"),
        reduction:$(".crown-parent").eq(1).attr("checked"),
        secondaryImpression:$(".crown-parent").eq(0).attr("checked"),
        tryIn:$(".crown-parent").eq(0).attr("checked"),
        cementation:$(".crown-parent").eq(0).attr("checked")
    });

    removableWork.push({
        partial:$(".partial-head").attr("checked"),
        complete:$(".complete-head").attr("checked")
    });
    partialWork.push({
        primaryImpression:$(".partial div").eq(0).attr("checked"),
        secondaryImpression:$(".partial div").eq(1).attr("checked"),
        jawRelationship:$(".partial div").eq(2).attr("checked"),
        tryIn:$(".partial div").eq(3).attr("checked"),
        delivery:$(".partial div").eq(4).attr("checked")
    })
    completeWork.push({
        primaryImpression:$(".complete div").eq(0).attr("checked"),
        secondaryImpression:$(".complete div").eq(1).attr("checked"),
        jawRelationship:$(".complete div").eq(2).attr("checked"),
        tryIn:$(".complete div").eq(3).attr("checked"),
        delivery:$(".complete div").eq(4).attr("checked")
    })
    endoWork.push({
        accessCavity:$(".endo-parent").eq(0).attr("checked"),
        accessCavityComment:$(".endo-comment").eq(0).val(),
        glidePath:$(".endo-parent").eq(1).attr("checked"),
        glidePathComment:$(".endo-comment").eq(1).val(),
        cleaningAndShaping:$(".endo-parent").eq(2).attr("checked"),
        cleaningAndShapingComment:$(".endo-comment").eq(2).val(),
        irrigation:$(".endo-parent").eq(3).attr("checked"),
        irrigationComment:$(".endo-comment").eq(3).val(),
        obturation:$(".endo-parent").eq(4).attr("checked"),
        obturationComment:$(".endo-comment").eq(4).val(),
        finalRestoration:$(".endo-parent").eq(5).attr("checked"),
        finalRestorationComment:$(".endo-comment").eq(5).val()
    });
    $("input[type='text']").val("");
    $("textarea").val("");
   
        let theOpertiveCheck=document.querySelectorAll(".opertive-check");
        for(let x=0;x<$("input[class='opertive-check']").length;x++){
            theOpertiveCheck[x].checked=false;
            $(theOpertiveCheck).eq(x).parent().attr("checked",false);
        }
        let postCoreCheck=document.querySelectorAll(".post-core-check");
        for(let y=0;y<$("input[class='post-core-check']").length;y++){
            postCoreCheck[y].checked=false;
            $(postCoreCheck).eq(y).parent().attr("checked",false);
        }
        let orthoCheck=document.querySelectorAll(".ortho-check");
        for(let i=0;i<$("input[class='ortho-check']").length;i++){
            orthoCheck[i].checked=false;
            $(orthoCheck).eq(i).parent().attr("checked",false);
        }
        let peudoCheck=document.querySelectorAll(".peudo-check");
        for(let p=0;p<$("input[class='peudo-check']").length;p++){
            peudoCheck[p].checked=false;
            $(peudoCheck).eq(p).parent().attr("checked",false);
        }
        let crownCheck=document.querySelectorAll(".crown-check");
        for(let c=0;c<$("input[class='crown-check']").length;c++){
            crownCheck[c].checked=false;
            $(crownCheck).eq(c).parent().attr("checked",false);
        }
        let headCheck=document.querySelectorAll(".head-check");
        for(let h=0;h<$("input[class='head-check']").length;h++){
            headCheck[h].checked=false;
            $(headCheck).eq(h).parent().attr("checked",false);
        }
        let removableCheck=document.querySelectorAll(".removable-check");
        for(let r=0;r<$("input[class='removable-check']").length;r++){
            removableCheck[r].checked=false;
            $(removableCheck).eq(r).parent().attr("checked",false);
        }
        let endoCheck=document.querySelectorAll(".endo-check");
        for(let r=0;r<$("input[class='endo-check']").length;r++){
            endoCheck[r].checked=false;
            $(endoCheck).eq(r).parent().attr("checked",false);
        }
         $(".opertive-container ,.post-core-container ,.ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container").hide();
        return visitCounter=4;
})





//Search Old Patients
$(".old").on("click",function(){
    $(".show-data").removeClass("hide");
    $(".add-data").addClass("hide");
    $(".add-visit").hide();
    $(".card").addClass("hide");
     $(".add").removeClass("hide");
     $("textarea").val("");
        $("input[type='text']").val("");
        
        $(".opertive-container , .post-core-container ,.ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container").hide();
    
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
    $(".opertive-container ,.post-core-container ,.ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container").hide();
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
            $(".opertive-container ,.post-core-container ,.ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container").hide();
            $(".accordion").addClass("hide");
            $(".add-visit").hide();
            $(".save-button").addClass("hide");
            $(".edit-button").removeClass("hide");
            $(".show-data").addClass("hide");

            thePatientVisits[index].appendTo(".new-visit-container");
            visitCounter=$('.accordion-item').length;
            
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

            $(".5th-date").val(visits[index].fifthDate);
            $(".5th-note").val(visits[index].fifthNotes);
            $(".6th-date").val(visits[index].sixthDate);
            $(".6th-note").val(visits[index].sixthNotes);
            $(".7th-date").val(visits[index].seventhDate);
            $(".7th-note").val(visits[index].seventhNotes);
            $(".8th-date").val(visits[index].eigthDate);
            $(".8th-note").val(visits[index].eigthNotes);
            $(".9th-date").val(visits[index].ninthDate);
            $(".9th-note").val(visits[index].ninthNotes);
            $(".10th-date").val(visits[index].tenthDate);
            $(".10th-note").val(visits[index].tenthNotes);
            

            $(".endo-comment").eq(0).val(endoWork[index].accessCavityComment);
            $(".endo-comment").eq(1).val(endoWork[index].glidePathComment);
            $(".endo-comment").eq(2).val(endoWork[index].cleaningAndShapingComment);
            $(".endo-comment").eq(3).val(endoWork[index].irrigationComment);
            $(".endo-comment").eq(4).val(endoWork[index].obturationComment);
            $(".endo-comment").eq(5).val(endoWork[index].finalRestorationComment);
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



           let postCoreCheck=document.querySelectorAll(".post-core-check");
           if(postCoreWork[index].fiberPost=="checked"){
            postCoreCheck[0].checked=true;
            $('.post-core-parent').eq(0).attr("checked",true);
           }else{
             postCoreCheck[0].checked=false;
             $('.post-core-parent').eq(0).attr("checked",false);
           }
           if(postCoreWork[index].metalPost=="checked"){
            postCoreCheck[1].checked=true;
            $('.post-core-parent').eq(1).attr("checked",true);
           }else{
             postCoreCheck[1].checked=false;
             $('.post-core-parent').eq(1).attr("checked",false);
           }
           if(postCoreWork[index].customMadePost=="checked"){
            postCoreCheck[2].checked=true;
            $('.post-core-parent').eq(2).attr("checked",true);
           }else{
             postCoreCheck[2].checked=false;
             $('.post-core-parent').eq(2).attr("checked",false);
           }



           let orthoCheck=document.querySelectorAll(".ortho-check");
           if(orthoWork[index].upperArch=="checked"){
            orthoCheck[0].checked=true;
            $('.ortho-parent').eq(0).attr("checked",true);
           }else{
             orthoCheck[0].checked=false;
             $('.ortho-parent').eq(0).attr("checked",false);
           }
           if(orthoWork[index].lowerArch=="checked"){
            orthoCheck[1].checked=true;
            $('.ortho-parent').eq(1).attr("checked",true);
           }else{
             orthoCheck[1].checked=false;
             $('.ortho-parent').eq(1).attr("checked",false);
           }
           if(orthoWork[index].bothArches=="checked"){
            orthoCheck[2].checked=true;
            $('.ortho-parent').eq(2).attr("checked",true);
           }else{
             orthoCheck[2].checked=false;
             $('.ortho-parent').eq(2).attr("checked",false);
           }


           let peudoCheck=document.querySelectorAll(".peudo-check");
           if(peudoWork[index].pulptomy=="checked"){
            peudoCheck[0].checked=true;
            $('.peudo-parent').eq(0).attr("checked",true);
           }else{
             peudoCheck[0].checked=false;
             $('.peudo-parent').eq(0).attr("checked",false);
           }
           if(peudoWork[index].pulpectomy=="checked"){
            peudoCheck[1].checked=true;
            $('.peudo-parent').eq(1).attr("checked",true);
           }else{
             peudoCheck[1].checked=false;
             $('.peudo-parent').eq(1).attr("checked",false);
           }





           
           let crownCheck=document.querySelectorAll(".crown-check");
           if(crownWork[index].primaryImpression=="checked"){
            crownCheck[0].checked=true;
            $('.crown-parent').eq(0).attr("checked",true);
           }else{
             crownCheck[0].checked=false;
             $('.crown-parent').eq(0).attr("checked",false);
           }
           if(crownWork[index].reduction=="checked"){
            crownCheck[1].checked=true;
            $('.crown-parent').eq(1).attr("checked",true);
           }else{
             crownCheck[1].checked=false;
             $('.crown-parent').eq(1).attr("checked",false);
           }
           if(crownWork[index].secondaryImpression=="checked"){
            crownCheck[2].checked=true;
            $('.crown-parent').eq(2).attr("checked",true);
           }else{
             crownCheck[2].checked=false;
             $('.crown-parent').eq(2).attr("checked",false);
           }
           if(crownWork[index].tryIn=="checked"){
            crownCheck[3].checked=true;
            $('.crown-parent').eq(3).attr("checked",true);
           }else{
             crownCheck[3].checked=false;
             $('.crown-parent').eq(3).attr("checked",false);
           }
           if(crownWork[index].cementation=="checked"){
            crownCheck[4].checked=true;
            $('.crown-parent').eq(4).attr("checked",true);
           }else{
             crownCheck[4].checked=false;
             $('.crown-parent').eq(4).attr("checked",false);
           }


           let partialHeadCheck=document.querySelector(".partial-head input");
           if(removableWork[index].partial=="checked"){
            partialHeadCheck.checked=true;
            $('.partial-head').attr("checked",true);
           }else{
             partialHeadCheck.checked=false;
             $('.partial-head').attr("checked",false);
           }
           let completeHeadCheck=document.querySelector(".complete-head input");
           if(removableWork[index].complete=="checked"){
            completeHeadCheck.checked=true;
            $('.complete-head').attr("checked",true);
           }else{
             completeHeadCheck.checked=false;
             $('.complete-head').attr("checked",false);
           }


           let partialCheck=document.querySelectorAll(".partial-check");
           if(partialWork[index].primaryImpression=="checked"){
            partialCheck[0].checked=true;
            $('.partial-parent').eq(0).attr("checked",true);
           }else{
             partialCheck[0].checked=false;
             $('.partial-parent').eq(0).attr("checked",false);
           }
           if(partialWork[index].secondaryImpression=="checked"){
            partialCheck[1].checked=true;
            $('.partial-parent').eq(1).attr("checked",true);
           }else{
             partialCheck[1].checked=false;
             $('.partial-parent').eq(1).attr("checked",false);
           }
           if(partialWork[index].jawRelationship=="checked"){
            partialCheck[2].checked=true;
            $('.partial-parent').eq(2).attr("checked",true);
           }else{
             partialCheck[2].checked=false;
             $('.partial-parent').eq(2).attr("checked",false);
           }
           if(partialWork[index].tryIn=="checked"){
            partialCheck[3].checked=true;
            $('.partial-parent').eq(3).attr("checked",true);
           }else{
             partialCheck[3].checked=false;
             $('.partial-parent').eq(3).attr("checked",false);
           }
           if(partialWork[index].delivery=="checked"){
            partialCheck[4].checked=true;
            $('.partial-parent').eq(4).attr("checked",true);
           }else{
             partialCheck[4].checked=false;
             $('.partial-parent').eq(4).attr("checked",false);
           }



           let completeCheck=document.querySelectorAll(".complete-check");
           if(completeWork[index].primaryImpression=="checked"){
            completeCheck[0].checked=true;
            $('.complete-parent').eq(0).attr("checked",true);
           }else{
             completeCheck[0].checked=false;
             $('.complete-parent').eq(0).attr("checked",false);
           }
           if(completeWork[index].secondaryImpression=="checked"){
            completeCheck[1].checked=true;
            $('.complete-parent').eq(1).attr("checked",true);
           }else{
             completeCheck[1].checked=false;
             $('.complete-parent').eq(1).attr("checked",false);
           }
           if(completeWork[index].jawRelationship=="checked"){
            completeCheck[2].checked=true;
            $('.complete-parent').eq(2).attr("checked",true);
           }else{
             completeCheck[2].checked=false;
             $('.complete-parent').eq(2).attr("checked",false);
           }
           if(completeWork[index].tryIn=="checked"){
            completeCheck[3].checked=true;
            $('.complete-parent').eq(3).attr("checked",true);
           }else{
             completeCheck[3].checked=false;
             $('.complete-parent').eq(3).attr("checked",false);
           }
           if(completeWork[index].delivery=="checked"){
            completeCheck[4].checked=true;
            $('.complete-parent').eq(4).attr("checked",true);
           }else{
             completeCheck[4].checked=false;
             $('.complete-parent').eq(4).attr("checked",false);
           }



           let endoCheck=document.querySelectorAll(".endo-check");
           if(endoWork[index].accessCavity=="checked"){
               endoCheck[0].checked=true;
               $(".endo-parent").eq(0).attr("checked",true);
           }else{
            endoCheck[0].checked=false;
            $(".endo-parent").eq(0).attr("checked",false);
           }
           if(endoWork[index].glidePath=="checked"){
            endoCheck[1].checked=true;
            $(".endo-parent").eq(1).attr("checked",true);
            }else{
            endoCheck[1].checked=false;
            $(".endo-parent").eq(1).attr("checked",false);
        }
        if(endoWork[index].cleaningAndShaping=="checked"){
            endoCheck[2].checked=true;
            $(".endo-parent").eq(2).attr("checked",true);
            }else{
            endoCheck[2].checked=false;
            $(".endo-parent").eq(2).attr("checked",false);
        }
        if(endoWork[index].irrigation=="checked"){
            endoCheck[3].checked=true;
            $(".endo-parent").eq(3).attr("checked",true);
            }else{
            endoCheck[3].checked=false;
            $(".endo-parent").eq(3).attr("checked",false);
        }
        if(endoWork[index].obturation=="checked"){
            endoCheck[4].checked=true;
            $(".endo-parent").eq(4).attr("checked",true);
            }else{
            endoCheck[4].checked=false;
            $(".endo-parent").eq(4).attr("checked",false);
        }
        if(endoWork[index].finalRestoration=="checked"){
            endoCheck[5].checked=true;
            $(".endo-parent").eq(5).attr("checked",true);
            }else{
            endoCheck[5].checked=false;
            $(".endo-parent").eq(5).attr("checked",false);
        }


        }  
        
    }
    
  
})
     





console.log(endoWork);

      


console.log(thePatientVisits);



//History
$(".history").on("click",function(){
    $(this).toggleClass("clicked");
    $(".info-container").addClass("hide");
    $(".history-container").removeClass("hide");
    
    $(".info ,.visits ,.work").removeClass("clicked");
    $(".accordion").addClass("hide");
    $(".add-visit").hide();
    $(".categories").hide();
    $(".opertive-container ,.post-core-container ,.ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container").hide();

   
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


let postAndCore=[
    "fiber post",
    "Metal post",
    "custom made post"
];

function postCoreCategories(){
    for(let index =0 ;index<postAndCore.length;index++){
        let postCoreCategories=document.createElement("h5"),
            categoriesChecking=document.createElement("input"),
            line=document.createElement("hr"),
            categoriesContainer=document.createElement("div");
        $(postCoreCategories).appendTo(categoriesContainer).addClass("post-core-cont").text(postAndCore[index]);
        $(categoriesChecking).appendTo(categoriesContainer).addClass("post-core-check").attr("type","checkbox").on("click",function(){
            if(this.checked){
                $(this).parent().attr("checked",true);
            }
            else if(!(this.checked)){
                $(this).parent().attr("checked",false);
            }
        });
         $(line).addClass("horizontal");
        $(".post-core-container").append(categoriesContainer);
        $(".post-core-container").append(line);  
         $(categoriesContainer).addClass("post-core-parent");

    }
};
postCoreCategories();




let ortho=[
    "Upper arch",
    "Lower arch",
    "Both arches"
];

function orthoCategories(){
    for(let index =0 ;index<ortho.length;index++){
        let orthoCategories=document.createElement("h5"),
            categoriesChecking=document.createElement("input"),
            line=document.createElement("hr"),
            categoriesContainer=document.createElement("div");
        $(orthoCategories).appendTo(categoriesContainer).addClass("ortho-cont").text(ortho[index]);
        $(categoriesChecking).appendTo(categoriesContainer).addClass("ortho-check").attr("type","checkbox").on("click",function(){
            if(this.checked){
                $(this).parent().attr("checked",true);
            }
            else if(!(this.checked)){
                $(this).parent().attr("checked",false);
            }
        });
         $(line).addClass("horizontal");
        $(".ortho-container").append(categoriesContainer);
        $(".ortho-container").append(line);  
         $(categoriesContainer).addClass("ortho-parent");

    }
};

orthoCategories();




let peudo=["pulptomy","pulpectomy"];
function peudoCategories(){
    for(let index =0 ;index<peudo.length;index++){
        let peudoCategories=document.createElement("h5"),
            categoriesChecking=document.createElement("input"),
            line=document.createElement("hr"),
            categoriesContainer=document.createElement("div");
        $(peudoCategories).appendTo(categoriesContainer).addClass("peudo-cont").text(peudo[index]);
        $(categoriesChecking).appendTo(categoriesContainer).addClass("peudo-check").attr("type","checkbox").on("click",function(){
            if(this.checked){
                $(this).parent().attr("checked",true);
            }
            else if(!(this.checked)){
                $(this).parent().attr("checked",false);
            }
        });
         $(line).addClass("horizontal");
        $(".peudo-container").append(categoriesContainer);
        $(".peudo-container").append(line);  
         $(categoriesContainer).addClass("peudo-parent");

    }
};
peudoCategories();





function crownCategories(){
    for(let index =0 ;index<crown.length;index++){
        let crownCategories=document.createElement("h5"),
            categoriesChecking=document.createElement("input"),
            line=document.createElement("hr"),
            categoriesContainer=document.createElement("div");
        $(crownCategories).appendTo(categoriesContainer).addClass("crown-cont").text(crown[index]);
        $(categoriesChecking).appendTo(categoriesContainer).addClass("crown-check").attr("type","checkbox").on("click",function(){
            if(this.checked){
                $(this).parent().attr("checked",true);
            }
            else if(!(this.checked)){
                $(this).parent().attr("checked",false);
            }
        });
         $(line).addClass("horizontal");
        $(".crown-container").append(categoriesContainer);
        $(".crown-container").append(line);  
         $(categoriesContainer).addClass("crown-parent");

    }
};
crownCategories();



let removableCategories=["partial","Complete"];
let removable=[{
    partial:[
        "primary impression",
        "secondary impression",
        "jaw relationship",
        "Try in",
        "Delivery"
    ],
    complete:[
        "primary impression",
        "secondary impression",
        "jaw relationship",
        "Try in",
        "Delivery"
    ]
}
    
];
function addPartialCategories(){
    for(let index =0 ;index<removable[0].partial.length;index++){
        let partialCategories=document.createElement("h5"),
            partialChecking=document.createElement("input"),
            line=document.createElement("hr"),
            partialContainer=document.createElement("div");
            $(partialContainer).addClass("partial-parent");
        $(partialCategories).appendTo(partialContainer).addClass("partial-cont").text(removable[0].partial[index]);
        $(partialChecking).appendTo(partialContainer).addClass("partial-check").attr("type","checkbox").on("click",function(){
            if(this.checked){
                $(this).parent().attr("checked",true);
            }
            else if(!(this.checked)){
                $(this).parent().attr("checked",false);
            }
        });    
        $(line).addClass("horizontal");
        $(".partial").append($(partialContainer));
        $(".partial").append(line);
        }
    
};
addPartialCategories();



function addCompleteCategories(){
    for(let index =0 ;index<removable[0].complete.length;index++){
        let completeCategories=document.createElement("h5"),
            completeChecking=document.createElement("input"),
            line=document.createElement("hr"),
            completeContainer=document.createElement("div");
            $(completeContainer).addClass("complete-parent");
        $(completeCategories).appendTo(completeContainer).addClass("complete-cont").text(removable[0].complete[index]);
        $(completeChecking).appendTo(completeContainer).addClass("complete-check").attr("type","checkbox").on("click",function(){
            if(this.checked){
                $(this).parent().attr("checked",true);
            }
            else if(!(this.checked)){
                $(this).parent().attr("checked",false);
            }
        });
        $(line).addClass("horizontal");
        $(".complete").append($(completeContainer));
        $(".complete").append(line);
        }
    
};

addCompleteCategories();






let endo=[
    "Access cavity",
    "Glide Path",
    "Cleaning & Shaping",
    "Irrigation",
    "Obturation",
    "Final restoration"
];
function addEndoCategories(){
    for (let index=0 ; index<endo.length ; index++){
        let theHead=document.createElement("h5"),
            textField=document.createElement('textarea'),
            commentContainer=document.createElement("div"),
            checkField=document.createElement("input"),
            line=document.createElement("hr"),
            container=document.createElement("div");
    $(container).appendTo(".endo-container").addClass("endo-parent");
    checkField.type="checkbox";
    $(theHead).appendTo(container).text(endo[index]).addClass("endo-head");
    $(textField).appendTo(commentContainer).addClass("endo-comment");
    $(commentContainer).appendTo(container).addClass("comment-cont");
    $(checkField).appendTo(container).addClass("endo-check").on('click',function(){
        if(this.checked){
            $(this).parent().attr("checked",true);
        }
        else if(!(this.checked)){
            $(this).parent().attr("checked",false);
        }
    });
    $(line).appendTo(".endo-container").addClass("horizontal");
    }
}
addEndoCategories();





$("input[class='head-check']").on('click',function(){
    if(this.checked){
        $(this).parent().attr("checked",true);
    }
    else if(!(this.checked)){
        $(this).parent().attr("checked",false);
    }
});




//Edit old data
$(".save-old").on("click",function(){
    $(".card").addClass("hide");
    $(this).addClass("hide");
    $(".add-visit").hide();
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

    visits[theIndex].fifthDate=$(".5th-date").val();
    visits[theIndex].fifthNotes=$(".5th-note").val();
    visits[theIndex].sixthDate=$(".6th-date").val();
    visits[theIndex].sixthNotes=$(".6th-note").val();
    visits[theIndex].seventhDate=$(".7th-date").val();
    visits[theIndex].seventhNotes=$(".7th-note").val();
    visits[theIndex].eigthDate=$(".8th-date").val();
    visits[theIndex].eigthNotes=$(".8th-note").val();
    visits[theIndex].ninthDate=$(".9th-date").val();
    visits[theIndex].ninthNotes=$(".9th-note").val();
    visits[theIndex].tenthDate=$(".10th-date").val();
    visits[theIndex].tenthNotes=$(".10th-note").val();
   

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

    postCoreWork[theIndex].fiberPost=$(".post-core-parent").eq(0).attr("checked");
    postCoreWork[theIndex].metalPost=$(".post-core-parent").eq(1).attr("checked");
    postCoreWork[theIndex].customMadePost=$(".post-core-parent").eq(2).attr("checked");

    orthoWork[theIndex].upperArch=$(".ortho-parent").eq(0).attr("checked");
    orthoWork[theIndex].lowerArch=$(".ortho-parent").eq(1).attr("checked");
    orthoWork[theIndex].bothArches=$(".ortho-parent").eq(2).attr("checked");


    peudoWork[theIndex].pulptomy=$(".peudo-parent").eq(0).attr("checked");
    peudoWork[theIndex].pulpectomy=$(".peudo-parent").eq(1).attr("checked");


    crownWork[theIndex].primaryImpression=$(".crown-parent").eq(0).attr("checked");
    crownWork[theIndex].reduction=$(".crown-parent").eq(1).attr("checked");
    crownWork[theIndex].secondaryImpression=$(".crown-parent").eq(2).attr("checked");
    crownWork[theIndex].tryIn=$(".crown-parent").eq(3).attr("checked");
    crownWork[theIndex].cementation=$(".crown-parent").eq(4).attr("checked");

    removableWork[theIndex].partial=$(".partial-head").attr("checked");
    removableWork[theIndex].complete=$(".complete-head").attr("checked");

    partialWork[theIndex].primaryImpression=$(".partial-parent").eq(0).attr("checked");
    partialWork[theIndex].secondaryImpression=$(".partial-parent").eq(1).attr("checked");
    partialWork[theIndex].jawRelationship=$(".partial-parent").eq(2).attr("checked");
    partialWork[theIndex].tryIn=$(".partial-parent").eq(3).attr("checked");
    partialWork[theIndex].delivery=$(".partial-parent").eq(4).attr("checked");

    completeWork[theIndex].primaryImpression=$(".complete-parent").eq(0).attr("checked");
    completeWork[theIndex].secondaryImpression=$(".complete-parent").eq(1).attr("checked");
    completeWork[theIndex].jawRelationship=$(".complete-parent").eq(2).attr("checked");
    completeWork[theIndex].tryIn=$(".complete-parent").eq(3).attr("checked");
    completeWork[theIndex].delivery=$(".complete-parent").eq(4).attr("checked");

    endoWork[theIndex].accessCavity=$(".endo-parent").eq(0).attr("checked");
    endoWork[theIndex].glidePath=$(".endo-parent").eq(1).attr("checked");
    endoWork[theIndex].cleaningAndShaping=$(".endo-parent").eq(2).attr("checked");
    endoWork[theIndex].irrigation=$(".endo-parent").eq(3).attr("checked");
    endoWork[theIndex].obturation=$(".endo-parent").eq(4).attr("checked");
    endoWork[theIndex].finalRestoration=$(".endo-parent").eq(5).attr("checked");
    endoWork[theIndex].accessCavityComment=$(".endo-comment").eq(0).val();
    endoWork[theIndex].glidePathComment=$(".endo-comment").eq(1).val();
    endoWork[theIndex].cleaningAndShapingComment=$(".endo-comment").eq(2).val();
    endoWork[theIndex].irrigationComment=$(".endo-comment").eq(3).val();
    endoWork[theIndex].obturationComment=$(".endo-comment").eq(4).val();
    endoWork[theIndex].finalRestorationComment=$(".endo-comment").eq(5).val();

    thePatientVisits[theIndex]=$(".new-visit-container").children().clone();
    $(".new-visit-container").empty();
    theIndex="";
    $("input[type='text']").val("");
    $("textarea").val("");
    let theOpertiveCheck=document.querySelectorAll(".opertive-check");
    for(let x=0;x<$("input[class='opertive-check']").length;x++){
        theOpertiveCheck[x].checked=false;
        $(theOpertiveCheck).eq(x).parent().attr("checked",false);
    }
    let postCoreCheck=document.querySelectorAll(".post-core-check");
    for(let y=0;y<$("input[class='post-core-check']").length;y++){
        postCoreCheck[y].checked=false;
        $(postCoreCheck).eq(y).parent().attr("checked",false);
    }
    let orthoCheck=document.querySelectorAll(".ortho-check");
    for(let i=0;i<$("input[class='ortho-check']").length;i++){
        orthoCheck[i].checked=false;
        $(orthoCheck).eq(i).parent().attr("checked",false);
    }
    let crownCheck=document.querySelectorAll(".crown-check");
        for(let c=0;c<$("input[class='crown-check']").length;c++){
            crownCheck[c].checked=false;
            $(crownCheck).eq(c).parent().attr("checked",false);
        }
        let headCheck=document.querySelectorAll(".head-check");
        for(let h=0;h<$("input[class='head-check']").length;h++){
            headCheck[h].checked=false;
            $(headCheck).eq(h).parent().attr("checked",false);
        }
        let removableCheck=document.querySelectorAll(".removable-check");
        for(let r=0;r<$("input[class='removable-check']").length;r++){
            removableCheck[r].checked=false;
            $(removableCheck).eq(r).parent().attr("checked",false);
        }
        let endoCheck=document.querySelectorAll(".endo-check");
        for(let r=0;r<$("input[class='endo-check']").length;r++){
            endoCheck[r].checked=false;
            $(endoCheck).eq(r).parent().attr("checked",false);
        }
        
        $(".opertive-container , .post-core-container ,.ortho-container ,.removable-container").hide();
       
        return visitCounter=4;
})




console.log("info",personalInfo);
console.log("history",history);
console.log("visits",visits);
console.log("work",work);
console.log(opertiveWork);
console.log(theIndex);
console.log(removableWork);
console.log(partialWork);
console.log(completeWork);
console.log(visitCounter);