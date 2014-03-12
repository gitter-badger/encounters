var Global_NumOfEnemies = 0;

$(document).ready(function() {
    
    var template ="<div class='enemy' id='{enemyNum}'><h1>{name}</h1><div class='cp_container'>{cp}</div><div class='hp_container'>{hp}</div><div class='attr_container'></div></div>"
    
    $("#btnMenu").click(function() {
        $(".leftpanel").slideToggle();
    });
    
    $('#btnNewEnemy').click(function(e) {
        $("#errors").html("");
        e.preventDefault();
        var Errors = new Array();
        
        var name = $('#enemyName').val();
        var cp = $('#critPoints').val();
        var hp = $('#healthPoints').val();
        var numOfType = $('#numOfEnemy').val();
        
        if(name.length < 1) Errors.push("Enter an enemy name");
        if(isNumber(cp) || cp.length < 1) Errors.push("Critical point of damage must be a number");
        if(isNumber(hp) || hp.length < 1) Errors.push("Health points must be a number");
        if(numOfType.length == 0) {
            numOfType = 1;
        } else if  (isNumber(numOfType)) {
            Errors.push('Enter an amount of enemies');
        }
        
        
        if(Errors.length > 0)
        {
            var ErrorStr = "<ul>";
            for(var i = 0; i < Errors.length; i++)
            {
                   ErrorStr+="<li>"+Errors[i]+"</li>";
            }
            ErrorStr+="</ul>";
            $("#errors").append(ErrorStr);
            return;    
        }
        
        for(var i = 0; i < numOfType; i++)
        {
            $('#encounters').append(newEnemey(name + " #" + (i+1), cp, hp, template));
        }
           
        var cpWidth = ((500-cp) /cp);
        $('.cp_point').css('width',(cpWidth) + 'px');
        $('.cp_container span:last-child').css("border", 0);
        
    });

    
    $('.hp_point').on('click',function() {
        if($(this).hasClass('checked'))
        {
            $(this).removeClass('checked');
            $(this).addClass('unchecked');    
        }
        else
        {
            $(this).removeClass('unchecked');
            $(this).addClass('checked');    
        }
    });
});

function isNumber(n)
{
    return typeof n === 'number';
}

function newEnemey(name,cp, hp, template)
{
    var numOfCP = cp;
    var numOfHP = hp;
    var cpHTML = "";
    var hpHTML = "";
    
    for(var i = 0; i < numOfCP; i++)
    {
        cpHTML+="<span class='cp_point'></span>";        
    }

    for(var i = 0; i < numOfHP; i++)
    {
        hpHTML+="<span class='hp_point'></span>";    
    }
    
    template = template.replace('{name}',name);
    template = template.replace('{cp}', cpHTML);
    template = template.replace('{hp}', hpHTML);
    template = template.replace('{enemyNum}', 'Enemy'+Global_NumOfEnemies);
    Global_NumOfEnemies++;
    
    return template;
    
}