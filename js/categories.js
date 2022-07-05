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
let opertive=["Composite","Amalgum","Glass ionmer"];  
let crown=["primary impression","reduction","secondary impression","try in","cementation"];
let svgClasses=["composite-svg","amalgum-svg","glassIonmer-svg"];
let postAndCore=[
    "fiber post",
    "Metal post",
    "custom made post"
];
let ortho=[
    "Upper arch",
    "Lower arch",
    "Both arches"
];
let peudo=["pulptomy","pulpectomy"];
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
let endo=[
    "Access cavity",
    "Glide Path",
    "Cleaning & Shaping",
    "Irrigation",
    "Obturation",
    "Final restoration"
];
let glidePath=[
    "file 8 manual",
    "file 10 manual",
    "file 15 manual",
    "file 20 manual",
    "file 25 manual"
];
let cleaningAndShaping=[
    "Orfice opener",
    "file 20 taper4",
    "file 25 taper4",
    "file 30 taper4",
    "file 35 taper4",
    "file 40 taper4",
    "file 20 taper 6",
    "file 25 taper 6",
    "file 30 taper 6",
    "file 35 taper 6",
    "file 40 taper 6"
];


//Add categories
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
    
    
    $(".categories ,.glide-cont .cleaning-shaping-cont").hide();
    $(".opertive-container").show();
    $(".category-parent").show();
    
    
    

});

//show post and core categories
$(".post-core").on("click",function(){
    $(".categories ,.glide-cont .cleaning-shaping-cont").hide();
    
    $(".post-core-container").show();
    $(".post-core-parent").show();
});


$(".ortho").on("click",function(){
    $(".categories ,.glide-cont .cleaning-shaping-cont").hide();
    $(".ortho-container").show();
    $(".ortho-parent").show();
});


$(".peudo").on("click",function(){
    $(".categories ,.glide-cont .cleaning-shaping-cont").hide();
    $(".peudo-container").show();
    $(".peudo-parent").show();
});



$(".crown").on("click",function(){
    $(".categories ,.glide-cont .cleaning-shaping-cont").hide();
    $(".crown-container").show();
    $(".crown-parent").show();
});

$(".removable").on("click",function(){
    $(".categories ,.glide-cont .cleaning-shaping-cont").hide();
    $(".removable-container").show();
    $(".partial , .complete").hide();
   $(".removable-cat").show();
    
});
$(".partial-head h5").on("click",function(){
    $(".removable-container").show();
    $(".removable-cat ,.glide-cont .cleaning-shaping-cont").hide();
    $(".partial").show();
})
$(".complete-head h5").on("click",function(){
    $(".removable-container").show();
    $(".removable-cat ,.glide-cont .cleaning-shaping-cont").hide();
    $(".complete").show();
})
$(".endo").on("click",function(){
    $(".categories ,.glide-cont .cleaning-shaping-cont").hide();
    $(".endo-container").show();
   $(".endo-parent").show();
   $(".glide-cont").hide();
})
$(".endo-head").eq(1).on("click",function(){
    $(".categories").hide();
     $(".endo-container, .cleaning-shaping-cont").hide();
   $(".endo-parent").hide();
   $(".glide-cont").show();
})
$(".endo-head").eq(2).on("click",function(){
    $(".categories").hide();
     $(".endo-container, .glide-cont").hide();
   $(".endo-parent").hide();
   $(".cleaning-shaping-cont").show();
})
$(".extraction").on("click",function(){
    $(".categories ,.glide-cont .cleaning-shaping-cont").hide();
     
    $(".extraction-container").show();
    
})
$(".implant").on("click",function(){
    $(".categories ,.glide-cont .cleaning-shaping-cont").hide();
    $(".implant-container").show();
    
})





    }
}






//Opertive Categories
function opertiveCategories(){
    
    for(let index =0 ;index<opertive.length;index++){
        let opertiveCategories=document.createElement("h5"),
            categoriesChecking=document.createElement("input"),
            svgContainer=document.createElement("div"),
            line=document.createElement("hr"),
            categoriesContainer=document.createElement("div");
            let theSvg=$(".svg-parent").children().eq(0).clone();
            $(theSvg).appendTo(svgContainer);
        $(opertiveCategories).appendTo(categoriesContainer).addClass("opertive-cont").text(opertive[index]);
        $(svgContainer).appendTo(categoriesContainer).addClass(svgClasses[index]);
        
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




function postCoreCategories(){
    
    let toothSvg=$(".svg-parent").children().eq(0).clone(),
        svgContainer=document.createElement("div");
        $(svgContainer).prependTo(".post-core-container").addClass("post-core-svg");
        $(toothSvg).appendTo(svgContainer);
        
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





function peudoCategories(){
    let toothSvg=$(".svg-parent").children().eq(1).clone(),
    svgContainer=document.createElement("div");
    $(svgContainer).prependTo(".peudo-container").addClass("peudo-svg");
    $(toothSvg).appendTo(svgContainer);
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
    let toothSvg=$(".svg-parent").children().eq(0).clone(),
        svgContainer=document.createElement("div");
        $(svgContainer).prependTo(".crown-container").addClass("crown-svg");
        $(toothSvg).appendTo(svgContainer);
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




function addPartialCategories(){
    let toothSvg=$(".svg-parent").children().eq(0).clone(),
        svgContainer=document.createElement("div");
        $(svgContainer).prependTo(".partial").addClass("partial-svg");
        $(toothSvg).appendTo(svgContainer);
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
    let toothSvg=$(".svg-parent").children().eq(0).clone(),
    svgContainer=document.createElement("div");
    $(svgContainer).prependTo(".complete").addClass("complete-svg");
    $(toothSvg).appendTo(svgContainer);
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







function addEndoCategories(){
    let toothSvg=$(".svg-parent").children().eq(0).clone(),
        svgContainer=document.createElement("div");
        $(svgContainer).prependTo(".endo-container").addClass("endo-svg");
        $(toothSvg).appendTo(svgContainer);
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





function glidePathCategories(){
for(let index=0 ;index<glidePath.length ; index++){
    let head=document.createElement("h5"),
        check=document.createElement("input"),
        line=document.createElement("hr"),
        glideContainer=document.createElement("div");
        check.type="checkbox";
    $(head).appendTo(glideContainer).addClass("glide-head").text(glidePath[index]);
    $(check).appendTo(glideContainer).addClass("glide-check").on('click',function(){
        if(this.checked){
            $(this).parent().attr("checked",true);
        }
        else if(!(this.checked)){
            $(this).parent().attr("checked",false);
        }
    });
    $(glideContainer).appendTo(".glide-cont").addClass("glide-container");
    $(line).appendTo(".glide-cont").addClass("horizontal");
}
}
glidePathCategories();






function cleaningAndShapingCategories(){
for(let index=0 ;index<cleaningAndShaping.length ; index++){
    let head=document.createElement("h5"),
        check=document.createElement("input"),
        line=document.createElement("hr"),
        cleaningContainer=document.createElement("div");
        check.type="checkbox";
        $(head).appendTo(cleaningContainer).addClass("cleaning-head").text(cleaningAndShaping[index]);
        $(check).appendTo(cleaningContainer).addClass("cleaning-check").on('click',function(){
            if(this.checked){
                $(this).parent().attr("checked",true);
            }
            else if(!(this.checked)){
                $(this).parent().attr("checked",false);
            }
        });
        $(cleaningContainer).appendTo(".cleaning-shaping-cont").addClass("cleaning-parent");
        $(line).addClass("horizontal").appendTo(".cleaning-shaping-cont");
}
}
cleaningAndShapingCategories();


 function extractionSvg(){
    let toothSvg=$(".svg-parent").children().eq(0).clone(),
        svgContainer=document.createElement("div");
        $(svgContainer).prependTo(".extraction-container").addClass("extraction-svg");
        $(toothSvg).appendTo(svgContainer);
        
 }
 extractionSvg();


function implantSvg(){
    let toothSvg=$(".svg-parent").children().eq(0).clone(),
        svgContainer=document.createElement("div");
        $(svgContainer).prependTo(".implant-container").addClass("implant-svg");
        $(toothSvg).appendTo(svgContainer);
        
}
implantSvg();





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