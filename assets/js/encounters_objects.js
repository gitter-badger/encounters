function Enemy(name, cp, hp){
    this.name= name;
    this.cp = cp;
    this.hp = hp;
    this.Stats = {};
    this.template = "<div class='enemy'><h1>{name}</h1><div class='cp_container'>{cp}</div><div class='hp_container'>{hp}</div><div class='attr_container'>{attributes}</div></div>";
    //this.template = "<div class='enemy'><h1>{name}</h1><div class='cp_container'>{cp}</div><div class='hp_container'>{hp}</div><div class='attr_container'>{attributes}</div></div>";
}

//Properties
Enemy.prototype.name = '';
Enemy.prototype.cp = '';
Enemy.prototype.hp = '';
Enemy.template = '';
Enemy.prototype.Stat = {};

//Functions
Enemy.prototype.GetHTMLTemplate = function() {
    
    console.log(this);
    
    var cphtml = "";
    var hphtml = "";
    var attrhtml = "";
    
    for(var j = 0; j < this.cp; j++)
    {
        cphtml += "<span class='cp_point'></span>";    
    }

    for(var j = 0; j < this.hp; j++)
    {
        hphtml += "<span class='hp_point'></span>";
    }
        
    for(var key in this.Stats)
    {
        attrhtml+= "<div class='stat'><div class='sname'>"+key+":&nbsp&nbsp</div><div class='svalue'>"+this.Stats[key]+"</div></div>";
    }
    
    
    this.template = this.template.replace("{name}", this.name);
    this.template = this.template.replace("{cp}", cphtml);
    this.template = this.template.replace("{hp}", hphtml);
    this.template = this.template.replace("{attributes}", attrhtml);
    return this.template;
};

Enemy.prototype.AddStat = function(key, value) {
    this.Stats[key] = value;
};
