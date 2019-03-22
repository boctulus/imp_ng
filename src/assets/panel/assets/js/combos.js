function Combosbyn(x) {
	/*	INICIO DEL COMBO 1 Soporte :*/
  ItDepend=document.getElementById('bynsoporte');
  if(!ItDepend){return;}                 
  var mitems=new Array();
	  mitems['Elige']=[''];
	  mitems['A4']=['Elegir opción','PAPEL 75/80 GRS.','ILUSTRACION MATTE 130/150 GRS.','FILMINA','ILUSTRACION BRILLANTE 130/150 GRS.','PAPEL AUTOADHESIVO'];
	  mitems['A3']=['Elegir opción','PAPEL 75/80 GRS.','ILUSTRACION BRILLANTE 130/150 GRS.','ILUSTRACION MATTE 130/150 GRS.','PAPEL AUTOADHESIVO'];
	  mitems['CARTA']=['Elegir opción','PAPEL 75/80 GRS.'];
	  mitems['OFICIO']=['Elegir opción','PAPEL 75/80 GRS.'];
  ItDepend.options.length=0;
  ItActual=mitems[x.options[x.selectedIndex].value];
  if(!ItActual){return;}
  ItDepend.options.length=ItActual.length;
  for(var i=0;i<ItActual.length;i++) {
    ItDepend.options[i].text=ItActual[i];
    ItDepend.options[i].value=ItActual[i];
	
/*	INICIO DEL COMBO 2 Impresión en Hoja: */
	
  ItDepend2=document.getElementById('bynimpresion');
  if(!ItDepend2){return;}                 
  var mitems2=new Array();
  mitems2['Elige']=[''];
  mitems2['A4']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['A3']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['CARTA']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['OFICIO']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  ItDepend2.options.length=0;
  ItActuall=mitems2[x.options[x.selectedIndex].value];
  if(!ItActuall){return;}
  ItDepend2.options.length=ItActuall.length;
  for(var ii=0;ii<ItActuall.length;ii++) {
    ItDepend2.options[ii].text=ItActuall[ii];
    ItDepend2.options[ii].value=ItActuall[ii];	
  }	
	/*	INICIO DEL COMBO 3 Terminación*/

  ItDepend3=document.getElementById('bynterminacion');
  if(!ItDepend3){return;}                 
  var mitems3=new Array();
  mitems3['Elige']=[''];
  mitems3['A4']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['A3']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['CARTA']=['','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['OFICIO']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  ItDepend3.options.length=0;
  ItActualll=mitems3[x.options[x.selectedIndex].value];
  if(!ItActualll){return;}
  ItDepend3.options.length=ItActualll.length;
  for(var iii=0;iii<ItActualll.length;iii++) {
    ItDepend3.options[iii].text=ItActualll[iii];
    ItDepend3.options[iii].value=ItActualll[iii];	
  }	
/*	INICIO DEL COMBO 4 PRioridad*/
  ItDepend4=document.getElementById('bynprioridad');
  if(!ItDepend4){return;}                 
  var mitems4=new Array();
  mitems4['Elige']=[''];
  mitems4['A4']=['NORMAL (24 HS.)','URGENTE (En el dia)','SIN APURO (48 HS.)'];
  mitems4['A3']=['NORMAL (24 HS.)','URGENTE (En el dia)','SIN APURO (48 HS.)'];
  mitems4['CARTA']=['NORMAL (24 HS.)','URGENTE (En el dia)','SIN APURO (48 HS.)'];
  mitems4['OFICIO']=['NORMAL (24 HS.)','URGENTE (En el dia)','SIN APURO (48 HS.)'];
  ItDepend4.options.length=0;
  ItActuallll=mitems4[x.options[x.selectedIndex].value];
  if(!ItActuallll){return;}
  ItDepend4.options.length=ItActuallll.length;
  for(var iiii=0;iiii<ItActuallll.length;iiii++) {
    ItDepend4.options[iiii].text=ItActuallll[iiii];
    ItDepend4.options[iiii].value=ItActuallll[iiii];	
  }	
	
  }
}



/*---------------------------FONCION PARA LASER COLOR---------------------------------------------*/




function Comboslaser(x) {
	/*	INICIO DEL COMBO 1 Soporte :*/
  ItDepend=document.getElementById('lasersoporte');
  if(!ItDepend){return;}                 
  var mitems=new Array();
	  mitems['Elige']=[''];
	  mitems['A4']=		 ['Elegir opción','PAPEL 90 GRS.','ILUSTRACION BRILLANTE 130/150 GRS.','ILUSTRACION MATTE 130/150 GRS.','ILUSTRACION BRILLANTE 170/200 GRS.','ILUSTRACION MATTE 170/200 GRS.','ILUSTRACION BRILLANTE 220/250 GRS.','ILUSTRACION MATTE 220/250 GRS.','OPALINA 250/300 GRS.','FILMINA','PAPEL AUTOADHESIVO'];
	  mitems['A3']=		 ['Elegir opción','PAPEL 90 GRS.','ILUSTRACION BRILLANTE 130/150 GRS.','ILUSTRACION MATTE 130/150 GRS.','ILUSTRACION BRILLANTE 170/200 GRS.','ILUSTRACION MATTE 170/200 GRS.','ILUSTRACION BRILLANTE 220/250 GRS.','ILUSTRACION MATTE 220/250 GRS.','OPALINA 250/300 GRS.','PAPEL AUTOADHESIVO'];
	  mitems['SUPER A3']=['Elegir opción'				 ,'ILUSTRACION BRILLANTE 130/150 GRS.','ILUSTRACION MATTE 130/150 GRS.','ILUSTRACION BRILLANTE 170/200 GRS.','ILUSTRACION MATTE 170/200 GRS.','ILUSTRACION BRILLANTE 220/250 GRS.','ILUSTRACION MATTE 220/250 GRS.','OPALINA 250/300 GRS.','PAPEL AUTOADHESIVO'];
  ItDepend.options.length=0;
  ItActual=mitems[x.options[x.selectedIndex].value];
  if(!ItActual){return;}
  ItDepend.options.length=ItActual.length;
  for(var i=0;i<ItActual.length;i++) {
    ItDepend.options[i].text=ItActual[i];
    ItDepend.options[i].value=ItActual[i];
	
/*	INICIO DEL COMBO 2 Impresión en Hoja: */
	

	/*	INICIO DEL COMBO 3 Terminación*/

  ItDepend3=document.getElementById('laserterminacion');
  if(!ItDepend3){return;}                 
  var mitems3=new Array();
  mitems3['Elige']=[''];
  mitems3['A4']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['A3']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['SUPER A3']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  ItDepend3.options.length=0;
  ItActualll=mitems3[x.options[x.selectedIndex].value];
  if(!ItActualll){return;}
  ItDepend3.options.length=ItActualll.length;
  for(var iii=0;iii<ItActualll.length;iii++) {
    ItDepend3.options[iii].text=ItActualll[iii];
    ItDepend3.options[iii].value=ItActualll[iii];	
  }	
/*	INICIO DEL COMBO 4 PRioridad*/
  ItDepend4=document.getElementById('laserprioridad');
  if(!ItDepend4){return;}                 
  var mitems4=new Array();
  mitems4['Elige']=[''];
  mitems4['A4']=['NORMAL (24 HS.)','URGENTE (En el dia)','SIN APURO (48 HS.)'];
  mitems4['A3']=['NORMAL (24 HS.)','URGENTE (En el dia)','SIN APURO (48 HS.)'];
  mitems4['SUPER A3']=['NORMAL (24 HS.)','URGENTE (En el dia)','SIN APURO (48 HS.)'];
  ItDepend4.options.length=0;
  ItActuallll=mitems4[x.options[x.selectedIndex].value];
  if(!ItActuallll){return;}
  ItDepend4.options.length=ItActuallll.length;
  for(var iiii=0;iiii<ItActuallll.length;iiii++) {
    ItDepend4.options[iiii].text=ItActuallll[iiii];
    ItDepend4.options[iiii].value=ItActuallll[iiii];	
  }	
  
}

}


function Comboscol(x) {
	ItDepend2=document.getElementById('laserimpresion');
  if(!ItDepend2){return;}                 
  var mitems2=new Array();
  mitems2['Elige']=['Elegir opción'];
  mitems2['Elegir opción']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['PAPEL 90 GRS.']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['ILUSTRACION BRILLANTE 130/150 GRS.']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['ILUSTRACION MATTE 130/150 GRS.']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['ILUSTRACION BRILLANTE 170/200 GRS.']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['ILUSTRACION MATTE 170/200 GRS.']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['ILUSTRACION BRILLANTE 220/250 GRS.']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['ILUSTRACION MATTE 220/250 GRS.']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['OPALINA 250/300 GRS.']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['PAPEL AUTOADHESIVO']=['SIMPLE FAZ'];
  mitems2['FILMINA']=['SIMPLE FAZ'];
  ItDepend2.options.length=0;
  ItActuall=mitems2[x.options[x.selectedIndex].value];
  if(!ItActuall){return;}
  ItDepend2.options.length=ItActuall.length;
  for(var ii=0;ii<ItActuall.length;ii++) {
    ItDepend2.options[ii].text=ItActuall[ii];
    ItDepend2.options[ii].value=ItActuall[ii];	
  }	
  
  ItDepend3=document.getElementById('laserterminacion');
  if(!ItDepend3){return;}                 
  var mitems3=new Array();
  mitems3['Elige']=['Elegir opción'];
  mitems3['Elegir opción']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['PAPEL 90 GRS.']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['ILUSTRACION BRILLANTE 130/150 GRS.']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['ILUSTRACION MATTE 130/150 GRS.']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['ILUSTRACION BRILLANTE 170/200 GRS.']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['ILUSTRACION MATTE 170/200 GRS.']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['ILUSTRACION BRILLANTE 220/250 GRS.']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['ILUSTRACION MATTE 220/250 GRS.']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['OPALINA 250/300 GRS.']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['PAPEL AUTOADHESIVO']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['FILMINA']=['SOLO IMPRESION'];
  mitems3['PAPEL AUTOADHESIVO']=['SOLO IMPRESION','CORTE'];
  ItDepend3.options.length=0;
  ItActualll=mitems3[x.options[x.selectedIndex].value];
  if(!ItActualll){return;}
  ItDepend3.options.length=ItActualll.length;
  for(var iii=0;iii<ItActualll.length;iii++) {
    ItDepend3.options[iii].text=ItActualll[iii];
    ItDepend3.options[iii].value=ItActualll[iii];	
  }	
  
}

/*---------------------------FONCION PARA PLOTTER---------------------------------------------*/
function CombosPlotter(x) {
	/*	INICIO DEL COMBO 1 Soporte :*/
  ItDepend=document.getElementById('plotterminacion');
  if(!ItDepend){return;}                 
  var mitems=new Array();
	  mitems['Elige']=[''];
	  mitems['PAPEL 90 GRS.']							=['Elegir opción','SOLO IMPRESION'];
	  mitems['PAPEL 130 GRS.']							=['Elegir opción','SOLO IMPRESION'];
	  mitems['FOTOGRAFICO 170 GRS. BRILLO']				=['Elegir opción','SOLO IMPRESION'];
	  mitems['LONA']									=['Elegir opción','SOLO IMPRESION','BOLSILLO EN LADO MAYOR','BOLSILLO EN LADO MENOR'];
	  mitems['VINILO']									=['SOLO IMPRESION'];	  
  ItDepend.options.length=0;
  ItActual=mitems[x.options[x.selectedIndex].value];
  if(!ItActual){return;}
  ItDepend.options.length=ItActual.length;
  for(var i=0;i<ItActual.length;i++) {
    ItDepend.options[i].text=ItActual[i];
    ItDepend.options[i].value=ItActual[i];
  }
  	/*	INICIO DEL COMBO 2 PRIORIDAD*/
  ItDepend2=document.getElementById('plotprioridad');
  if(!ItDepend2){return;}                 
  var mitems2=new Array();
	  mitems2['Elige']=[''];
	  mitems2['PAPEL 90 GRS.']							=['Elegir opción','NORMAL (24 HS.)','URGENTE (En el dia)','SIN APURO (48 HS.)'];
	  mitems2['PAPEL 130 GRS.']							=['Elegir opción','NORMAL (24 HS.)','URGENTE (En el dia)','SIN APURO (48 HS.)'];
	  mitems2['FOTOGRAFICO 170 GRS. BRILLO']			=['Elegir opción','NORMAL (24 HS.)','URGENTE (En el dia)','SIN APURO (48 HS.)'];
	  mitems2['LONA']									=['Elegir opción','NORMAL (48 HS.)','SIN APURO (72 HS.)'];
	  mitems2['VINILO']									=['Elegir opción','NORMAL (48 HS.)','SIN APURO (72 HS.)'];	  
  ItDepend2.options.length=0;
  ItActuall=mitems2[x.options[x.selectedIndex].value];
  if(!ItActuall){return;}
  ItDepend2.options.length=ItActuall.length;
  for(var ii=0;ii<ItActuall.length;ii++) {
    ItDepend2.options[ii].text=ItActuall[ii];
    ItDepend2.options[ii].value=ItActuall[ii];	
  }	
  
  
    //INICIO FUNCION PARA MOSTRAR DIVS DE PLOTTER//
  
  
var posicion=document.getElementById('plotsoporte').options.selectedIndex; //posicion

     if (document.getElementById('plotsoporte').options[posicion].text =="LONA"){
       		document.getElementById('plot1').style.display = "block";
			document.getElementById('plot2').style.display = "none";
    }

	 if (document.getElementById('plotsoporte').options[posicion].text =="VINILO"){
       		document.getElementById('plot1').style.display = "block";
			document.getElementById('plot2').style.display = "none";
    }
	
	 if (document.getElementById('plotsoporte').options[posicion].text =="PAPEL 90 GRS."){
       		document.getElementById('plot2').style.display = "block";
			document.getElementById('plot1').style.display = "none";
    }

	 if (document.getElementById('plotsoporte').options[posicion].text =="PAPEL 130 GRS."){
       		document.getElementById('plot2').style.display = "block";
			document.getElementById('plot1').style.display = "none";
    }

	 if (document.getElementById('plotsoporte').options[posicion].text =="FOTOGRAFICO 170 GRS. BRILLO"){
       		document.getElementById('plot2').style.display = "block";
			document.getElementById('plot1').style.display = "none";
    }

}













/*---------------------------FONCION PARA TARJETA---------------------------------------------*/

	
	/*	INICIO DEL COMBO 5 TARJETAS SOPORTE*/
function Combostarjeta(x) {
  ItDepend5=document.getElementById('tarjetassoporte');
  if(!ItDepend5){return;}                 
  var mitems5=new Array();
  mitems5['Elige']=[''];
  mitems5['100']= ['Elegir opción','ILUSTRACIÓN MATTE 250 GRS.','ILUSTRACIÓN BRILLANTE 250 GRS.','OPALINA 250 GRS.'];
  mitems5['200']= ['Elegir opción','ILUSTRACIÓN MATTE 250 GRS.','ILUSTRACIÓN BRILLANTE 250 GRS.','OPALINA 250 GRS.'];
  mitems5['300']= ['Elegir opción','ILUSTRACIÓN MATTE 250 GRS.','ILUSTRACIÓN BRILLANTE 250 GRS.','OPALINA 250 GRS.'];
  mitems5['400']= ['Elegir opción','ILUSTRACIÓN MATTE 250 GRS.','ILUSTRACIÓN BRILLANTE 250 GRS.','OPALINA 250 GRS.'];
  mitems5['500']= ['Elegir opción','ILUSTRACIÓN MATTE 250 GRS.','ILUSTRACIÓN BRILLANTE 250 GRS.','OPALINA 250 GRS.'];
  mitems5['1000']=['ILUSTRACIÓN BRILLANTE 300 GRS. / LACA DE FRENTE'];
  ItDepend5.options.length=0;
  ItActualllll=mitems5[x.options[x.selectedIndex].value];
  if(!ItActualllll){return;}
  ItDepend5.options.length=ItActualllll.length;
  for(var iiiii=0;iiiii<ItActualllll.length;iiiii++) {
    ItDepend5.options[iiiii].text=ItActualllll[iiiii];
    ItDepend5.options[iiiii].value=ItActualllll[iiiii];	
  }		
  

  
  
  
	/*	INICIO DEL COMBO 5 TARJETAS TIPO IMPRESION*/	
	
  ItDepend6=document.getElementById('tarjetasimpresion');
  if(!ItDepend6){return;}                 
  var mitems6=new Array();
  mitems6['Elige']=[''];
  mitems6['100']= ['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems6['200']= ['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems6['300']= ['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems6['400']= ['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems6['500']= ['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems6['1000']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  ItDepend6.options.length=0;
  ItActuallllll=mitems6[x.options[x.selectedIndex].value];
  if(!ItActuallllll){return;}
  ItDepend6.options.length=ItActuallllll.length;
  for(var iiiiii=0;iiiiii<ItActuallllll.length;iiiiii++) {
    ItDepend6.options[iiiiii].text=ItActuallllll[iiiiii];
    ItDepend6.options[iiiiii].value=ItActuallllll[iiiiii];	
  }		
	/*	INICIO DEL COMBO 5 TARJETAS TERMINACION*/	
	
  ItDepend7=document.getElementById('tarjetasterminacion');
  if(!ItDepend7){return;}                 
  var mitems7=new Array();
  mitems7['Elige']=[''];
  mitems7['100']= ['ANGULOS RECTOS'];
  mitems7['200']= ['ANGULOS RECTOS'];
  mitems7['300']= ['ANGULOS RECTOS'];
  mitems7['400']= ['ANGULOS RECTOS'];
  mitems7['500']= ['ANGULOS RECTOS'];
  mitems7['1000']=['Elegir opción','ANGULOS RECTOS','ANGULOS REDONDEADOS'];;
  ItDepend7.options.length=0;
  ItActualllllll=mitems7[x.options[x.selectedIndex].value];
  if(!ItActualllllll){return;}
  ItDepend7.options.length=ItActualllllll.length;
  for(var iiiiiii=0;iiiiiii<ItActualllllll.length;iiiiiii++) {
    ItDepend7.options[iiiiiii].text=ItActualllllll[iiiiiii];
    ItDepend7.options[iiiiiii].value=ItActualllllll[iiiiiii];	
  }		

	/*	INICIO DEL COMBO 5 TARJETAS PRIORIDAD*/	
	
  ItDepend8=document.getElementById('tarjetasprioridad');
  if(!ItDepend8){return;}                 
  var mitems8=new Array();
  mitems8['Elige']=[''];
  mitems8['100']= ['Elegir opción','NORMAL (24 HS.)','SIN APURO (48 HS.)'];
  mitems8['200']= ['Elegir opción','NORMAL (24 HS.)','SIN APURO (48 HS.)'];
  mitems8['300']= ['Elegir opción','NORMAL (24 HS.)','SIN APURO (48 HS.)'];
  mitems8['400']= ['Elegir opción','NORMAL (24 HS.)','SIN APURO (48 HS.)'];
  mitems8['500']= ['Elegir opción','NORMAL (24 HS.)','SIN APURO (48 HS.)'];
  mitems8['1000']=['15 DIAS'];
  ItDepend8.options.length=0;
  ItActuallllllll=mitems8[x.options[x.selectedIndex].value];
  if(!ItActuallllllll){return;}
  ItDepend8.options.length=ItActuallllllll.length;
  for(var iiiiiiii=0;iiiiiiii<ItActuallllllll.length;iiiiiiii++) {
    ItDepend8.options[iiiiiiii].text=ItActuallllllll[iiiiiiii];
    ItDepend8.options[iiiiiiii].value=ItActuallllllll[iiiiiiii];	
  }		
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
/*--------------------*/
function sporte(x) {

  ItDepend2=document.getElementById('bynimpresion');
  if(!ItDepend2){return;}                 
  var mitems2=new Array();
  mitems2['Elige']=[''];
  mitems2['Elegir opción']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['PAPEL 75/80 GRS.']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['ILUSTRACION BRILLANTE 130/150 GRS.']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['ILUSTRACION MATTE 130/150 GRS.']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['ILUSTRACION BRILLANTE 170/200 GRS.']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['ILUSTRACION MATTE 170/200 GRS.']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['ILUSTRACION BRILLANTE 220/250 GRS.']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['ILUSTRACION MATTE 220/250 GRS.']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['OPALINA 250/300 GRS.']=['Elegir opción','SIMPLE FAZ','DOBLE FAZ'];
  mitems2['PAPEL AUTOADHESIVO']=['SIMPLE FAZ'];
  mitems2['FILMINA']=['SIMPLE FAZ'];
  ItDepend2.options.length=0;
  ItActuall=mitems2[x.options[x.selectedIndex].value];
  if(!ItActuall){return;}
  ItDepend2.options.length=ItActuall.length;
  for(var ii=0;ii<ItActuall.length;ii++) {
    ItDepend2.options[ii].text=ItActuall[ii];
    ItDepend2.options[ii].value=ItActuall[ii];	
  }		
  
  
   ItDepend3=document.getElementById('bynterminacion');
  if(!ItDepend3){return;}                 
  var mitems3=new Array();
  mitems3['Elige']=[''];
  mitems3['Elegir opción']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['PAPEL 75/80 GRS.']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['ILUSTRACION BRILLANTE 130/150 GRS.']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['ILUSTRACION MATTE 130/150 GRS.']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['ILUSTRACION BRILLANTE 170/200 GRS.']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['ILUSTRACION MATTE 170/200 GRS.']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['ILUSTRACION BRILLANTE 220/250 GRS.']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['ILUSTRACION MATTE 220/250 GRS.']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['OPALINA 250/300 GRS.']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['PAPEL AUTOADHESIVO']=['Elegir opción','SOLO IMPRESION','ABROCHADO','ANILLADO/ESPIRALADO','EMBLOCKADO','CORTE','CORTE Y EMBLOCKADO'];
  mitems3['FILMINA']=['SOLO IMPRESION'];
  mitems3['PAPEL AUTOADHESIVO']=['SOLO IMPRESION','CORTE'];
  ItDepend3.options.length=0;
  ItActualll=mitems3[x.options[x.selectedIndex].value];
  if(!ItActualll){return;}
  ItDepend3.options.length=ItActualll.length;
  for(var iii=0;iii<ItActualll.length;iii++) {
    ItDepend3.options[iii].text=ItActualll[iii];
    ItDepend3.options[iii].value=ItActualll[iii];	
  }	
  
  
}