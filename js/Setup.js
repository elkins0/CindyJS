var csconsole;
createCindy = function(data){ 
    csmouse = [100, 100];
    cscount = 0;
    var c=document.getElementById(data.canvasname);
    csctx=c.getContext("2d");
    cscode=document.getElementById(data.movescript).text;
    cscode=condense(cscode);
    cserg=analyse(cscode,false);
    
    
    csw=c.width;
    csh=c.height;
    csport.drawingstate.matrix.ty=csport.drawingstate.matrix.ty-csh;
    csport.drawingstate.initialmatrix.ty=csport.drawingstate.initialmatrix.ty-csh;
    
    csgeo={};
    
    var i=0;
    
    images={};

    csinit(gslp);
    for (var k in data.images) {
        var name=data.images[k];
        images[k] = new Image();
        images[k].ready=false;
        images[k].onload = function() {
            images[k].ready=true;
            updateCindy();

            
        };
        images[k].src = name;
        
        
    }
    setuplisteners(document.getElementById(data.canvasname));

}
