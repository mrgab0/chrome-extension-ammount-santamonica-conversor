

var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var preciocucuta={"COL":{"efectivo":0.00,"transfer":0.00,"compra":5000,"venta":5000},"BSF":{"efectivo":0.00,"transfer":0.00,"compra":5000,"venta":5000},"COL2":{"efectivo":0.00,"transfer":0.00,"compra":5000,"venta":5000},"BSF2":{"efectivo":0.00,"transfer":0.00,"compra":5000,"venta":5000},"_timestamp":{"fecha":"","fecha_corta":"HOY, 2017"},"USD":{"cucuta":11.54,"venezuela":11.54,"colombia":11.54,"dicom":11.54},"EUR":{"cucuta":5450,"venezuela":4671,"colombia":3270,"dicom":3733}}

}
/*
     FILE ARCHIVED ON 06:47:15 Apr 15, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:11:45 Dec 06, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 161.706
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.062
  cdx.remote: 0.058
  esindex: 0.008
  LoadShardBlock: 80.344 (3)
  PetaboxLoader3.datanode: 76.213 (4)
  CDXLines.iter: 18.458 (3)
  load_resource: 68.572
  PetaboxLoader3.resolve: 47.677
*/




        
              
             function formatCurrency(num) {
                     num = num.toString().replace(/\$|\,/g, '');
                     if (isNaN(num)) num = "0";
                     sign = (num == (num = Math.abs(num)));
                     num = Math.floor(num * 100 + 0.50000000001);
                     cents = num % 100;
                     num = Math.floor(num / 100).toString();
                     if (cents < 10) cents = "0" + cents;
                     for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
                             num = num.substring(0, num.length - (4 * i + 3)) + '.' + num.substring(num.length - (4 * i + 3));
                     return (((sign) ? '' : '-') + num + '.' + cents);
             }
   
             function calculate() {
   
                 
   
   
                 var orig_amount = null;
                 orig_amount = document.getElementById("amount").value;
                 orig_amount = orig_amount.replace(/\./g, ',');
                 orig_amount = orig_amount.replace(/\,/g, '.');
                 orig_amount = orig_amount.replace(/[a-zA-Z\$]+/g, '');
                 var amount  = parseFloat(orig_amount);
   
                 var select          = document.getElementById("select");
                 var result          = document.getElementById("result");
                 var result2         = document.getElementById("result2");
                 var result3         = document.getElementById("result3");
                 var result4         = document.getElementById("result4");
                 var resulttitle     = document.getElementById("resulttitle");
                 var result2title    = document.getElementById("result2title");
                 var result3itle     = document.getElementById("result3itle");
                 var result4title    = document.getElementById("result4title");
                 var fecha           = document.getElementById("fecha");
   
   
                 // Cambio a Bolivar (de Pesos Colombianos)
                 var pesocompratotal = formatCurrency(amount / preciocucuta.COL.venta);
                 var pesoventatotal  = formatCurrency(amount / preciocucuta.COL.compra);
                 var pesocompratotal2 = formatCurrency(amount / preciocucuta.COL2.venta);
                 var pesoventatotal2  = formatCurrency(amount / preciocucuta.COL2.compra);
                 fecha.value = preciocucuta._timestamp.fecha;
   
                 // Cambio a Pesos (de Bolivares Venezolanos)
                 var bolivarcompratotal = formatCurrency(amount * preciocucuta.BSF.venta);
                 var bolivarventatotal  = formatCurrency(amount * preciocucuta.BSF.compra);
                 var bolivarcompratotal2 = formatCurrency(amount * preciocucuta.BSF2.venta);
                 var bolivarventatotal2  = formatCurrency(amount * preciocucuta.BSF2.compra);
                 fecha.value = preciocucuta._timestamp.fecha;
   
                 // Cambio a Dólares (en Bolivares y Pesos)
                 var dolarcompratotal = formatCurrency(amount * preciocucuta.USD.cucuta);
                 var dolarventatotal  = formatCurrency(amount * preciocucuta.USD.venezuela);
                 var dolarcompratotal2 = formatCurrency(amount * preciocucuta.USD.colombia);
                 var dolarventatotal2  = formatCurrency(amount * preciocucuta.USD.dicom);
                 fecha.value = preciocucuta._timestamp.fecha;
   
                 // Cambio a Euros (en Bolivares y Pesos)
                 var eurocompratotal = formatCurrency(amount * preciocucuta.EUR.cucuta);
                 var euroventatotal  = formatCurrency(amount * preciocucuta.EUR.venezuela);
                 var eurocompratotal2 = formatCurrency(amount * preciocucuta.EUR.colombia);
                 var euroventatotal2  = formatCurrency(amount * preciocucuta.EUR.dicom);
                 fecha.value = preciocucuta._timestamp.fecha;
   
   
   
                 if (select.value === "1") {
                     resulttitle.value       = 'Pesos:';
                     //result2title.value      = 'Venta(E):';
                     result.value = 'BsF. ' + pesocompratotal;
                     //result2.value = 'BsF. ' + pesoventatotal;
                     //result3itle.value       = 'Compra(T):';
                     result4title.value      = 'Venta(T):';
                     result3.value = 'BsF. ' + pesocompratotal2;
                     result4.value = 'BsF. ' + pesoventatotal2;
                 }
                 if (select.value === "2") {
                     resulttitle.value       = 'Compra(E):';
                     result2title.value      = 'Venta(E):';
                     result.value = 'COP. ' + bolivarcompratotal;
                     result2.value = 'COP. ' + bolivarventatotal;
                     result3itle.value       = 'Compra(T):';
                     result4title.value      = 'Venta(T):';
                     result3.value = 'COP. ' + bolivarcompratotal2;
                     result4.value = 'COP. ' + bolivarventatotal2;
                 }
                 if (select.value === "3") {
                     resulttitle.value       = 'restante:';
                     //result2title.value      = 'Venezuela:';
                     result.value = 'BsF. ' + dolarcompratotal;
                     //result2.value = 'BsF. ' + dolarventatotal;
                     //result3itle.value       = 'Colombia:';
                     //result4title.value      = 'DICOM:';
                     result3.value = 'COP. ' + dolarcompratotal2;
                     result4.value = 'BsF. ' + dolarventatotal2;
                 }
                 if (select.value === "4") {
                     resulttitle.value       = 'restante:';
                     //result2title.value      = 'Venezuela:';
                     result.value = 'BsF. ' + eurocompratotal;
                     result2.value = 'BsF. ' + euroventatotal;
                     result3itle.value       = 'Colombia:';
                     //result4title.value      = 'DICOM:';
                     result3.value = 'COP. ' + eurocompratotal2;
                     result4.value = 'BsF. ' + euroventatotal2;
                 }
              }
             calculate();

             var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var preciocucuta={"COL":{"efectivo":0.00,"transfer":0.00,"compra":5000,"venta":5000},"BSF":{"efectivo":0.00,"transfer":0.00,"compra":5000,"venta":5000},"COL2":{"efectivo":0.00,"transfer":0.00,"compra":5000,"venta":5000},"BSF2":{"efectivo":0.00,"transfer":0.00,"compra":5000,"venta":5000},"_timestamp":{"fecha":"","fecha_corta":"HOY, 2017"},"USD":{"cucuta":11.54,"venezuela":11.54,"colombia":11.54,"dicom":11.54},"EUR":{"cucuta":5450,"venezuela":4671,"colombia":3270,"dicom":3733}}

}
/*
     FILE ARCHIVED ON 06:47:15 Apr 15, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:11:45 Dec 06, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 161.706
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.062
  cdx.remote: 0.058
  esindex: 0.008
  LoadShardBlock: 80.344 (3)
  PetaboxLoader3.datanode: 76.213 (4)
  CDXLines.iter: 18.458 (3)
  load_resource: 68.572
  PetaboxLoader3.resolve: 47.677
*/
