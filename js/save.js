let personalInfo=[];
let history=[];
let visits=[];
let work=[];  
let opertiveWork=[];
let postCoreWork=[];
let orthoWork=[];
let peudoWork=[];
let crownWork=[];
let removableWork=[];
let partialWork=[];
let completeWork=[];
let thePatientVisits=[];
let endoWork=[];
let glideWork=[];
let cleaningWork=[];
let opertiveSvgCheck=[
    {
        composite:[],
        amalgum:[],
        glassIonmer:[]
    }
];
let postCoreSvgCheck=[{
    patient:[]
}];
let crownSvgCheck=[{
    patient:[]
}];
let removableSvgCheck=[{
    partial:[],
    complete:[]
}];
let implantSvgCheck=[{
    patient:[]
}];
let extractionSvgCheck=[{
    patient:[]
}];
let peudoSvgCheck=[{
    patient:[]
}];
let endoSvgCheck=[{
    patient:[]
}];
let length=0;




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
        primaryImpression:$(".partial-parent").eq(0).attr("checked"),
        secondaryImpression:$(".partial-parent").eq(1).attr("checked"),
        jawRelationship:$(".partial-parent").eq(2).attr("checked"),
        tryIn:$(".partial-parent").eq(3).attr("checked"),
        delivery:$(".partial-parent").eq(4).attr("checked")
    })
    completeWork.push({
        primaryImpression:$(".complete-parent").eq(0).attr("checked"),
        secondaryImpression:$(".complete-parent").eq(1).attr("checked"),
        jawRelationship:$(".complete-parent").eq(2).attr("checked"),
        tryIn:$(".complete-parent").eq(3).attr("checked"),
        delivery:$(".complete-parent").eq(4).attr("checked")
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
    glideWork.push({
        file8:$(".glide-container").eq(0).attr("checked"),
        file10:$(".glide-container").eq(1).attr("checked"),
        file15:$(".glide-container").eq(2).attr("checked"),
        file20:$(".glide-container").eq(3).attr("checked"),
        file25:$(".glide-container").eq(4).attr("checked")
    });
    cleaningWork.push({
        orficeOpener:$(".cleaning-parent").eq(0).attr("checked"),
        file20Taper4:$(".cleaning-parent").eq(1).attr("checked"),
        file25Taper4:$(".cleaning-parent").eq(2).attr("checked"),
        file30Taper4:$(".cleaning-parent").eq(3).attr("checked"),
        file35Taper4:$(".cleaning-parent").eq(4).attr("checked"),
        file40Taper4:$(".cleaning-parent").eq(5).attr("checked"),
        file20Taper6:$(".cleaning-parent").eq(6).attr("checked"),
        file25Taper6:$(".cleaning-parent").eq(7).attr("checked"),
        file30Taper6:$(".cleaning-parent").eq(8).attr("checked"),
        file35Taper6:$(".cleaning-parent").eq(9).attr("checked"),
        file40Taper6:$(".cleaning-parent").eq(10).attr("checked")
        
    })
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
        let partialCheck=document.querySelectorAll(".partial-check");
        for(let r=0;r<$("input[class='partial-check']").length;r++){
            partialCheck[r].checked=false;
            $(partialCheck).eq(r).parent().attr("checked",false);
        }
        let completeCheck=document.querySelectorAll(".complete-check");
        for(let r=0;r<$("input[class='complete-check']").length;r++){
            completeCheck[r].checked=false;
            $(completeCheck).eq(r).parent().attr("checked",false);
        }
        let endoCheck=document.querySelectorAll(".endo-check");
        for(let r=0;r<$("input[class='endo-check']").length;r++){
            endoCheck[r].checked=false;
            $(endoCheck).eq(r).parent().attr("checked",false);
        }
        let glideCheck=document.querySelectorAll(".glide-check");
        for(let r=0;r<$("input[class='glide-check']").length;r++){
            glideCheck[r].checked=false;
            $(glideCheck).eq(r).parent().attr("checked",false);
        }
        let cleaningCheck=document.querySelectorAll(".cleaning-check");
        for(let r=0;r<$("input[class='cleaning-check']").length;r++){
            cleaningCheck[r].checked=false;
            $(cleaningCheck).eq(r).parent().attr("checked",false);
        }
         $(".opertive-container ,.post-core-container ,.ortho-container ,.peudo-container ,.crown-container ,.removable-container ,.endo-container ,.glide-cont ,.cleaning-shaping-cont ,.implant-container").hide();

length++;
 opertiveSvgCheck[length]=[
    {
        composite:[],
        amalgum:[],
        glassIonmer:[]
    }
];
 postCoreSvgCheck[length]=[{
    patient:[]
}];
 crownSvgCheck[length]=[{
    patient:[]
}];
 removableSvgCheck[length]=[{
    partial:[],
    complete:[]
}];
 implantSvgCheck[length]=[{
    patient:[]
}];
 extractionSvgCheck[length]=[{
    patient:[]
}];
 peudoSvgCheck[length]=[{
    patient:[]
}];
endoSvgCheck[length]=[{
    patient:[]
}];
$("#Spots polygon ,#Spots path ,.spots polygon").attr("fill","#FFFFFF");
console.log(partialWork);
        return $(".accordion-item").length=4;
})



//save SVG
let opertiveParent=document.querySelector(".composite-svg");
$("#Spots polygon ,#Spots path ,.spots polygon").on("click",function(){
    if($(this).attr("fill")=="#FFFFFF"){
        // console.log($(this).parent().closest("div"));
        if($(this).parent().closest("div").attr("class")==="composite-svg"){
            
            opertiveSvgCheck[length].composite.push(this.id);     
        }if($(this).parent().closest("div").attr("class")==="amalgum-svg"){
            
            opertiveSvgCheck[length].amalgum.push(this.id);
        }if($(this).parent().closest("div").attr("class")==="glassIonmer-svg"){
            
            opertiveSvgCheck[length].glassIonmer.push(this.id);
        } if($(this).parent().closest("div").attr("class")==="crown-svg"){
            
            crownSvgCheck[length].patient.push(this.id);
        }if($(this).parent().closest("div").attr("class")==="implant-svg"){
            
            implantSvgCheck[length].patient.push(this.id);
        }if($(this).parent().closest("div").attr("class")==="extraction-svg"){
            
            extractionSvgCheck[length].patient.push(this.id);
        }if($(this).parent().closest("div").attr("class")==="post-core-svg"){
            
            postCoreSvgCheck[length].patient.push(this.id);
        }
        if($(this).parent().closest("div").attr("class")==="peudo-svg"){
            
            peudoSvgCheck[length].patient.push(this.id);
        }if($(this).parent().closest("div").attr("class")==="partial-svg"){
            
            removableSvgCheck[length].partial.push(this.id);
        }if($(this).parent().closest("div").attr("class")==="complete-svg"){
            
            removableSvgCheck[length].complete.push(this.id);
        }if($(this).parent().closest("div").attr("class")==="endo-svg"){
            
            endoSvgCheck[length].patient.push(this.id);
        }
      return  $(this).attr("fill","black");
    }else{
        if($(this).parent().closest("div").attr("class")==="composite-svg"){
            let compositeIndex=opertiveSvgCheck[length].composite.indexOf(this.id);
           opertiveSvgCheck[length].composite.splice(compositeIndex,1);
        }if($(this).parent().closest("div").attr("class")==="amalgum-svg"){
            
            let amalgumIndex=opertiveSvgCheck[length].amalgum.indexOf(this.id);
            opertiveSvgCheck[length].amalgum.splice(amalgumIndex,1);
        }if($(this).parent().closest("div").attr("class")==="glassIonmer-svg"){
            
            let glassIonmerIndex=opertiveSvgCheck[length].glassIonmer.indexOf(this.id);
            opertiveSvgCheck[length].glassIonmer.splice(glassIonmerIndex,1);
        } if($(this).parent().closest("div").attr("class")==="crown-svg"){
            
            let crownIndex=crownSvgCheck[length].patient.indexOf(this.id);
           crownSvgCheck[length].patient.splice(crownIndex,1);
        }if($(this).parent().closest("div").attr("class")==="implant-svg"){
            
            let implantIndex=implantSvgCheck[length].patient.indexOf(this.id);
           implantSvgCheck[length].patient.splice(implantIndex,1);
        }if($(this).parent().closest("div").attr("class")==="extraction-svg"){
            
            let extractionIndex=extractionSvgCheck[length].patient.indexOf(this.id);
            extractionSvgCheck[length].patient.splice(extractionIndex,1);
        }if($(this).parent().closest("div").attr("class")==="post-core-svg"){
            
            let postCoreIndex=postCoreSvgCheck[length].patient.indexOf(this.id);
            postCoreSvgCheck[length].patient.splice(postCoreIndex,1);
        }if($(this).parent().closest("div").attr("class")==="peudo-svg"){
            
            let peudoIndex=peudoSvgCheck[length].patient.indexOf(this.id);
            peudoSvgCheck[length].patient.splice(peudoIndex,1);
        }if($(this).parent().closest("div").attr("class")==="partial-svg"){
            
            let partialIndex=removableSvgCheck[length].partial.indexOf(this.id);
            removableSvgCheck[length].partial.splice(partialIndex,1);
        }if($(this).parent().closest("div").attr("class")==="complete-svg"){
            
            let completeIndex=removableSvgCheck[length].complete.indexOf(this.id);
            removableSvgCheck[length].complete.splice(completeIndex,1);
        }if($(this).parent().closest("div").attr("class")==="endo-svg"){
            
            let endoIndex=endoSvgCheck[length].patient.indexOf(this.id);
            endoSvgCheck[length].patient.splice(endoIndex,1);
        }
     return   $(this).attr("fill","#FFFFFF");
    }
    
});





let theIndex;
$(".search").on("click",function(){
   
     const index = personalInfo.map(object => object.name).indexOf($(".old-patient-name").val());
   return  theIndex=index;
     
})



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


    glideWork[theIndex].file8=$(".glide-container").eq(0).attr("checked");
    glideWork[theIndex].file10=$(".glide-container").eq(1).attr("checked");
    glideWork[theIndex].file15=$(".glide-container").eq(2).attr("checked");
    glideWork[theIndex].file20=$(".glide-container").eq(3).attr("checked");
    glideWork[theIndex].file25=$(".glide-container").eq(4).attr("checked");

    cleaningWork[theIndex].orficeOpener=$(".cleaning-parent").eq(0).attr("checked");
    cleaningWork[theIndex].file20Taper4=$(".cleaning-parent").eq(1).attr("checked");
    cleaningWork[theIndex].file25Taper4=$(".cleaning-parent").eq(2).attr("checked");
    cleaningWork[theIndex].file30Taper4=$(".cleaning-parent").eq(3).attr("checked");
    cleaningWork[theIndex].file35Taper4=$(".cleaning-parent").eq(4).attr("checked");
    cleaningWork[theIndex].file40Taper4=$(".cleaning-parent").eq(5).attr("checked");
    cleaningWork[theIndex].file20Taper6=$(".cleaning-parent").eq(6).attr("checked");
    cleaningWork[theIndex].file25Taper6=$(".cleaning-parent").eq(7).attr("checked");
    cleaningWork[theIndex].file30Taper6=$(".cleaning-parent").eq(8).attr("checked");
    cleaningWork[theIndex].file35Taper6=$(".cleaning-parent").eq(9).attr("checked");
    cleaningWork[theIndex].file40Taper6=$(".cleaning-parent").eq(10).attr("checked");


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
        let partialCheck=document.querySelectorAll(".partial-check");
        for(let r=0;r<$("input[class='partial-check']").length;r++){
            partialCheck[r].checked=false;
            $(partialCheck).eq(r).parent().attr("checked",false);
        }
        let completeCheck=document.querySelectorAll(".complete-check");
        for(let r=0;r<$("input[class='complete-check']").length;r++){
            completeCheck[r].checked=false;
            $(completeCheck).eq(r).parent().attr("checked",false);
        }
        let endoCheck=document.querySelectorAll(".endo-check");
        for(let r=0;r<$("input[class='endo-check']").length;r++){
            endoCheck[r].checked=false;
            $(endoCheck).eq(r).parent().attr("checked",false);
        }
        let glideCheck=document.querySelectorAll(".glide-check");
        for(let r=0;r<$("input[class='glide-check']").length;r++){
            glideCheck[r].checked=false;
            $(glideCheck).eq(r).parent().attr("checked",false);
        }
        let cleaningCheck=document.querySelectorAll(".cleaning-check");
        for(let r=0;r<$("input[class='cleaning-check']").length;r++){
            cleaningCheck[r].checked=false;
            $(cleaningCheck).eq(r).parent().attr("checked",false);
        }
        
        $(".opertive-container , .post-core-container ,.ortho-container ,.removable-container ,.cleaning-shaping-cont ,.extraction-container ,.implant-container ,.peudo-container").hide();
       
        return $(".accordion-item").length=4;
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





console.log(endoSvgCheck);