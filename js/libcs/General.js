
//==========================================
//      Things that apply to several types
//==========================================
var General={};
General.helper={};

General.order={
    undefined:0,
    boolean:1,
    number:2,
    term:3,
    atomic:4,
    variable:5,
    geo:6,
    string:7,
    list:8
} 

General.string=function(s){
   return {ctype:"string",value:s}
}

General.bool=function(b){
   return {ctype:"boolean",value:b}
}

General.isLessThan=function(a,b){
   return General.compare(a,b)==-1;

}


General.isEqual=function(a,b){
   return General.compare(a,b)==0;

}


General.compareResults=function(a,b){
    return General.compare(a.result,b.result);
}

General.compare=function(a,b){
    if (a.ctype!=b.ctype){
        return (General.order[a.ctype]-General.order[b.ctype])
    }
    if (a.ctype=='number') {
        return CSNumber.helper.compare(a,b);
    }
    if (a.ctype=='list') {
        return List.helper.compare(a,b);
    }
    if (a.ctype=='string') {
        if(a.value==b.value) {
            return 0;
        }
        if(a.value<b.value) {
            return -1;
        }
        return 1;
    }
    if (a.ctype=='boolean') {
        if(a.value==b.value) {
            return 0;
        }
        if(a.value=false) {
            return -1
        }
        return 1;
    }
    
}

General.add=function(v0,v1){
    if(v0.ctype == 'void'  && v1.ctype=='number' ){   //Monadisches Plus
        return CSNumber.clone(v1);
    }
    
    if(v0.ctype=='number'  && v1.ctype=='number' ){
        return CSNumber.add(v0,v1);
    }
    if(v0.ctype=='string' || v1.ctype=='string' ){
        return {"ctype":"string" ,  "value":niceprint(v0)+niceprint(v1)}
    }

    if(v0.ctype=='list' && v1.ctype=='list' ){
        return List.add(v0,v1)
    }
    return nada;
}

General.mult=function(v0,v1){

 if(v0.ctype=='number' &&v1.ctype=='number' ){
        return CSNumber.mult(v0,v1);
    }
    if(v0.ctype=='number' &&v1.ctype=='list' ){
        return List.scalmult(v0,v1);
    }
    if(v0.ctype=='list' &&v1.ctype=='number' ){
        return List.scalmult(v1,v0);
    }
    if(v0.ctype=='list' &&v1.ctype=='list' ){
        return List.mult(v0,v1);
    }
    return nada;

}

General.div=function(v0,v1){

    if(v0.ctype=='number' &&v1.ctype=='number' ){
        return CSNumber.div(v0,v1);
    }
    if(v0.ctype=='list' &&v1.ctype=='number' ){
        return List.scaldiv(v1,v0);
    }
    return nada;
}



General.max=function(v0,v1){

 if(v0.ctype=='number' &&v1.ctype=='number' ){
        return CSNumber.max(v0,v1);
    }
    if(v0.ctype=='list' &&v1.ctype=='list' ){
        return List.max(v0,v1);
    }
    return nada;

}



General.min=function(v0,v1){

 if(v0.ctype=='number' &&v1.ctype=='number' ){
        return CSNumber.min(v0,v1);
    }
    if(v0.ctype=='list' &&v1.ctype=='list' ){
        return List.min(v0,v1);
    }
    return nada;

}


