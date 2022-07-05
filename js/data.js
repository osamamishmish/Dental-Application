let formCategories=["Name","Age","Gender","Date","Phone Number"];
let formInputs=[
    $("#input-name").val(),
    $("#input-age").val(),
    $("#input-gender").val(),
    $("#input-date").val(),
    $("#input-phone").val()
];
let newVisits=[];


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


function historyCheck(){
    "use strict";
    for(let i=0 ; i<4;i++){
        let diseasesCheck=document.createElement("p");
        $(diseasesCheck).appendTo($(".check-cont").eq(i)).addClass("the-check");
    }
}




//Add new visits
let visitCounter=$(".accordion-item").length;
let theVisitContainer=document.querySelector(".new-visit-container");
$('.add-visit').on("click",function(){
  $(".accordion-item").length++;
  if($(".accordion-item").length===10){
      $(".add-visit").hide();
  }else{
    $(".add-visit").show();
}
    $(".accordion-item").eq(0).clone().appendTo(".new-visit-container").addClass("the-added-visit");
    $(".new-visit-container").children().last().children().eq(0).children().children().text($(".accordion-item").length+"th"+" "+"visit");
    $(".the-added-visit").last().children().eq(0).attr("id","flush-heading"+$(".accordion-item").length);
    $(".the-added-visit").last().children().eq(1).attr("id","flush-collapse"+$(".accordion-item").length);
    $(".the-added-visit").last().children().eq(1).addClass($(".accordion-item").length+"th"+"-"+"visit").removeClass("first-visit");
    $(".the-added-visit").last().children().eq(0).children().attr("data-bs-target","#flush-collapse"+$(".accordion-item").length);
    $(".the-added-visit").last().children().eq(0).children().attr("aria-controls","flush-collapse"+$(".accordion-item").length);
    $(".the-added-visit").last().children().eq(1).attr("aria-labelledby","flush-heading"+$(".accordion-item").length);
    $(".the-added-visit").last().children().eq(1).children().eq(0).children().eq(0).addClass($(".accordion-item").length+"th"+"-"+"date").removeClass("first-date").val("");
    $(".the-added-visit").last().children().eq(1).children().eq(1).children().eq(0).addClass($(".accordion-item").length+"th"+"-"+"note").removeClass("first-note").val("");
})



$("input[class='check-box']").on("click",function(){
    if(this.checked){
        $(this).parent().attr("checked",true);
    }
    else if(!(this.checked)){
        $(this).parent().attr("checked",false);
    }
});

$("input[class='head-check']").on('click',function(){
    if(this.checked){
        $(this).parent().attr("checked",true);
    }
    else if(!(this.checked)){
        $(this).parent().attr("checked",false);
    }
});