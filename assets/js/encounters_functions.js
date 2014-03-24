function resetForm() {
    $("#txtName").val("");
    $("#txtNumEnemies").val("");
    $("#txtCritDmg").val("");
    $("#txtHP").val("");
    
    $("#Attributes").html("");
}

function loadNPCFromObject(NPC) {
    $("#txtName").val(NPC.name);
    $("#txtCritDmg").val(NPC.cp);
    $("#txtHP").val(NPC.hp);
    $("#txtNumEnemies").val("1");
    
    
}

function AddStat(name, value) {
    
}

function AddNPCToList(npc)
{
    
}