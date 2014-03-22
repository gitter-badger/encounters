$(document).ready(function() {   
    $("#btnAddEnemy").on("click", AddEnemy_Click);
    $("#btnAddAttribute").on("click", addAttribute_Click);
    $("#btnPrintable").on("click", printable_Click);
});

function AddEnemy_Click(e)
{
    e.preventDefault();

    var name = $("#txtName").val();
    var num = $("#txtNumEnemies").val();
    var cp = $("#txtCritDmg").val();
    var hp = $("#txtHP").val();
    
    var enemy = new Enemy(name, cp, hp);
    
    $(".attributerow").each(function(index) {
        var attrName = $(this).find("#txtAttrName").val();
        var attrValue = $(this).find("#txtAttrValue").val();
        enemy.AddStat(attrName, attrValue);
    });
    
    for(var i = 0; i < num; i++)
        $("#Encounter").append(enemy.GetHTMLTemplate());
    
    resetForm();
    
}

function printable_Click(e)
{
    e.preventDefault();
    $("#newEnemyForm").slideToggle("fast", function() {
        if($(this).is(":visible")) {
            $("#btnPrintable").text("Hide Forms");    
        }
        else {
            $("#btnPrintable").text("Show Forms");    
        }
    });
    
}


function addAttribute_Click(e)
{
    e.preventDefault();
    var template = '<div class="attributerow"><div class="form-group"><input type="text" id="txtAttrName" class="form-control" placeholder="Name" /></div><div class ="form-group"><input type="text" id="txtAttrValue" class="form-control" placeholder="Value" /></div></div>';
    
    $("#Attributes").append(template);
    
}
