
function showVariable(newName){
    console.log("newName app.js " + newName);
};

function showSecondVariable(secondName){
    console.log("secondName app.js " + secondName);
};


function setBindings() {
    $("nav a").click(function(e){
        let btnID = e.currentTarget.id;
        MODEL.getMyVariable(btnID);
        
    });
   
}

function setBindings2() {
     $("footer a").click(function(e){
        let btnID = e.currentTarget.id;
        MODEL.getMySecondVariable(btnID);
    });
}

$(document).ready(function(){
    console.log("ready");
    setBindings();
    setBindings2();
    

});
