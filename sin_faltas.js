
// var st = "HChNosotrós y nuestrochs hamigos camioneros nos vamos de vacaciones con ellos."

// // https://stackoverflow.com/questions/17264639/replace-text-but-keep-case
// function matchCase(text, pattern) {
//     var result = '';

//     for(var i = 0; i < text.length; i++) {
//         var c = text.charAt(i);
//         var p = pattern.charCodeAt(i);

//         if(p >= 65 && p < 65 + 26) {
//             result += c.toUpperCase();
//         } else {
//             result += c.toLowerCase();
//         }
//     }

//     return result;
// }

// "oooAsdFoooo".replace("Asd", function(match) {
//     return matchCase("qwer", match);
// });

// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions


function sin_faltas(st) {
	// var ws = st.split(" ");
	// var i = 0;
	// for (var i = 0; i < ws.length; i++) {
	// 	// var ls = ws[i].split("");
		
	// }

	// console.log(st);

	// Eliminar ll
	var searchRegExp = new RegExp("ll", "g");
	st = st.replace(searchRegExp, "y");
	var searchRegExp = new RegExp("Ll", "g");
	st = st.replace(searchRegExp, "Y");

	// Eliminar v
	var searchRegExp = new RegExp("v", "g");
	st = st.replace(searchRegExp, "b");
	var searchRegExp = new RegExp("V", "g");
	st = st.replace(searchRegExp, "B");

	// Eliminar h, pero no la ch
	var searchRegExp = new RegExp("(?<!c|C)h", "g");
	st = st.replace(searchRegExp, "");
	var searchRegExp = new RegExp("(?<!c|C)H", "g");
	st = st.replace(searchRegExp, "");

	// Eliminar tildes
	var searchRegExp = new RegExp("\u00E1", "g");
	st = st.replace(searchRegExp, "a");
	var searchRegExp = new RegExp("\u00E9", "g");
	st = st.replace(searchRegExp, "e");
	var searchRegExp = new RegExp("\u00ED", "g");
	st = st.replace(searchRegExp, "i");
	var searchRegExp = new RegExp("\u00F3", "g");
	st = st.replace(searchRegExp, "o");
	var searchRegExp = new RegExp("\u00FA", "g");
	st = st.replace(searchRegExp, "u");
	var searchRegExp = new RegExp("\u00C1", "g");
	st = st.replace(searchRegExp, "A");
	var searchRegExp = new RegExp("\u00C9", "g");
	st = st.replace(searchRegExp, "E");
	var searchRegExp = new RegExp("\u00CD", "g");
	st = st.replace(searchRegExp, "I");
	var searchRegExp = new RegExp("\u00D3", "g");
	st = st.replace(searchRegExp, "O");
	var searchRegExp = new RegExp("\u00DA", "g");
	st = st.replace(searchRegExp, "U");

	// Eliminar g con sonido j por la j
	var searchRegExp = new RegExp("ge", "g");
	st = st.replace(searchRegExp, "je");
	var searchRegExp = new RegExp("gi", "g");
	st = st.replace(searchRegExp, "ji");
	var searchRegExp = new RegExp("Ge", "g");
	st = st.replace(searchRegExp, "Je");
	var searchRegExp = new RegExp("Gi", "g");
	st = st.replace(searchRegExp, "Ji");
	var searchRegExp = new RegExp("gE", "g");
	st = st.replace(searchRegExp, "jE");
	var searchRegExp = new RegExp("gI", "g");
	st = st.replace(searchRegExp, "jI");
	var searchRegExp = new RegExp("GE", "g");
	st = st.replace(searchRegExp, "JE");
	var searchRegExp = new RegExp("GI", "g");
	st = st.replace(searchRegExp, "JI");

	// Eliminar c con sonido z
	var searchRegExp = new RegExp("ce", "g");
	st = st.replace(searchRegExp, "ze");
	var searchRegExp = new RegExp("ci", "g");
	st = st.replace(searchRegExp, "zi");
	var searchRegExp = new RegExp("Ce", "g");
	st = st.replace(searchRegExp, "Ze");
	var searchRegExp = new RegExp("Zi", "g");
	st = st.replace(searchRegExp, "Zi");
	var searchRegExp = new RegExp("CE", "g");
	st = st.replace(searchRegExp, "ZE");
	var searchRegExp = new RegExp("ZI", "g");
	st = st.replace(searchRegExp, "ZI");
	var searchRegExp = new RegExp("cE", "g");
	st = st.replace(searchRegExp, "zE");
	var searchRegExp = new RegExp("cI", "g");
	st = st.replace(searchRegExp, "zI");

	// Eliminar q con sonido k
	var searchRegExp = new RegExp("qu", "g");
	st = st.replace(searchRegExp, "k");
	var searchRegExp = new RegExp("Qu", "g");
	st = st.replace(searchRegExp, "K");
	var searchRegExp = new RegExp("qU", "g");
	st = st.replace(searchRegExp, "k");

	// Eliminar c con sonido k por k
	var searchRegExp = new RegExp("ca", "g");
	st = st.replace(searchRegExp, "ka");
	var searchRegExp = new RegExp("co", "g");
	st = st.replace(searchRegExp, "ko");
	var searchRegExp = new RegExp("cu", "g");
	st = st.replace(searchRegExp, "ku");
	var searchRegExp = new RegExp("Ca", "g");
	st = st.replace(searchRegExp, "Ka");
	var searchRegExp = new RegExp("Co", "g");
	st = st.replace(searchRegExp, "Ko");
	var searchRegExp = new RegExp("Cu", "g");
	st = st.replace(searchRegExp, "Ku");
	var searchRegExp = new RegExp("cA", "g");
	st = st.replace(searchRegExp, "kA");
	var searchRegExp = new RegExp("cO", "g");
	st = st.replace(searchRegExp, "kO");
	var searchRegExp = new RegExp("cU", "g");
	st = st.replace(searchRegExp, "kU");
	var searchRegExp = new RegExp("CA", "g");
	st = st.replace(searchRegExp, "KA");
	var searchRegExp = new RegExp("CO", "g");
	st = st.replace(searchRegExp, "KO");
	var searchRegExp = new RegExp("CU", "g");
	st = st.replace(searchRegExp, "KU");

	// Eliminar y con sonido i por i
	var searchRegExp = new RegExp("y(?![a-zA-Z])", "g"); 
	st = st.replace(searchRegExp, "i");
	var searchRegExp = new RegExp("Y(?![a-zA-Z])", "g"); 
	st = st.replace(searchRegExp, "I");
	
	// // LATINOAMÉRICA: Eliminar c y z con sonido s (previamente c zon sonido z se ha sustituido por z)
	// st = st.replaceAll("z", "s");
	// st = st.replaceAll("Z", "S");

	// //Eliminar gü si ya hemos eliminado el sonido j de la g
	// st = st.replaceAll("gü", "g");
	// st = st.replaceAll("gÜ", "g");
	// st = st.replaceAll("GÜ", "G");
	// st = st.replaceAll("Gü", "G");

	// // Eliminar la w por la u (podría tener sonido gu o b, pero es menos común)
	// st = st.replaceAll("w", "u");
	// st = st.replaceAll("W", "U");

	return st;
}

// function sin_faltas(st) {
//     var ws = st.split(" ");
//     var off = 0;
//     for (var i = 0; i < ws.length; i++) {
// 	var ls = ws[i].split("");
//         if(/\</.test(ls[0])){ off=1; }
//         if(/\>/.test(ls[0])){ off=0; }
//         for (var j = 1; j < ls.length; j++) {
//           if(/\</.test(ls[j])){ off=1; }
//           if(Math.random() < 0.5 && off == 0) {
//             if(/^[a-z]$/.test(ls[j-1]) && /^[a-z]$/.test(ls[j])) {
//               var x = ls[j-1];
//               ls[j-1] = ls[j];
//               ls[j] = x;
//             }
// 	    else if(/^[A-Z]$/.test(ls[j-1]) && /^[a-z]$/.test(ls[j])) {
//               var x = ls[j-1];
//               ls[j-1] = ls[j].toUpperCase();
//               ls[j] = x.toLowerCase();
// 	    }
//           }
//           if(/\>/.test(ls[j])){ off=0; }
//         }
//         ws[i] = ls.join("");
//     }
//     return ws.join(" ");
// }


// function search_rae_word(ws){
// 	var search = "https://dle.rae.es/" + ws;
// 	Download(search);
// }

// function sin_faltas(st) {
//   // var ws = st.split(" ");
//   // var i = 0;
//   // for (var i = 0; i < ws.length; i++) {
//   //  // var ls = ws[i].split("");
    
//   // }

//   // console.log(st);

//   // Eliminar ll
//   var searchRegExp = new RegExp("ll", "g");
//   st = st.replace(searchRegExp, "y");
//   var searchRegExp = new RegExp("Ll", "g");
//   st = st.replace(searchRegExp, "Y");

//   // Eliminar v
//   var searchRegExp = new RegExp("v", "g");
//   st = st.replace(searchRegExp, "b");
//   var searchRegExp = new RegExp("V", "g");
//   st = st.replace(searchRegExp, "B");

//   // Eliminar h, pero no la ch
//   var searchRegExp = new RegExp("(?<!c|C)h", "g");
//   st = st.replace(searchRegExp, "");
//   var searchRegExp = new RegExp("(?<!c|C)H", "g");
//   st = st.replace(searchRegExp, "");

//   // Eliminar tildes
//   var searchRegExp = new RegExp("\u00E1", "g");
//   st = st.replace(searchRegExp, "a");
//   var searchRegExp = new RegExp("\u00E9", "g");
//   st = st.replace(searchRegExp, "e");
//   var searchRegExp = new RegExp("\u00ED", "g");
//   st = st.replace(searchRegExp, "i");
//   var searchRegExp = new RegExp("\u00F3", "g");
//   st = st.replace(searchRegExp, "o");
//   var searchRegExp = new RegExp("\u00FA", "g");
//   st = st.replace(searchRegExp, "u");
//   var searchRegExp = new RegExp("\u00C1", "g");
//   st = st.replace(searchRegExp, "A");
//   var searchRegExp = new RegExp("\u00C9", "g");
//   st = st.replace(searchRegExp, "E");
//   var searchRegExp = new RegExp("\u00CD", "g");
//   st = st.replace(searchRegExp, "I");
//   var searchRegExp = new RegExp("\u00D3", "g");
//   st = st.replace(searchRegExp, "O");
//   var searchRegExp = new RegExp("\u00DA", "g");
//   st = st.replace(searchRegExp, "U");

//   // Eliminar g con sonido j por la j
//   var searchRegExp = new RegExp("ge", "g");
//   st = st.replace(searchRegExp, "je");
//   var searchRegExp = new RegExp("gi", "g");
//   st = st.replace(searchRegExp, "ji");
//   var searchRegExp = new RegExp("Ge", "g");
//   st = st.replace(searchRegExp, "Je");
//   var searchRegExp = new RegExp("Gi", "g");
//   st = st.replace(searchRegExp, "Ji");
//   var searchRegExp = new RegExp("gE", "g");
//   st = st.replace(searchRegExp, "jE");
//   var searchRegExp = new RegExp("gI", "g");
//   st = st.replace(searchRegExp, "jI");
//   var searchRegExp = new RegExp("GE", "g");
//   st = st.replace(searchRegExp, "JE");
//   var searchRegExp = new RegExp("GI", "g");
//   st = st.replace(searchRegExp, "JI");

//   // Eliminar c con sonido z
//   var searchRegExp = new RegExp("ce", "g");
//   st = st.replace(searchRegExp, "ze");
//   var searchRegExp = new RegExp("ci", "g");
//   st = st.replace(searchRegExp, "zi");
//   var searchRegExp = new RegExp("Ce", "g");
//   st = st.replace(searchRegExp, "Ze");
//   var searchRegExp = new RegExp("Zi", "g");
//   st = st.replace(searchRegExp, "Zi");
//   var searchRegExp = new RegExp("CE", "g");
//   st = st.replace(searchRegExp, "ZE");
//   var searchRegExp = new RegExp("ZI", "g");
//   st = st.replace(searchRegExp, "ZI");
//   var searchRegExp = new RegExp("cE", "g");
//   st = st.replace(searchRegExp, "zE");
//   var searchRegExp = new RegExp("cI", "g");
//   st = st.replace(searchRegExp, "zI");

//   // Eliminar q con sonido k
//   var searchRegExp = new RegExp("qu", "g");
//   st = st.replace(searchRegExp, "k");
//   var searchRegExp = new RegExp("Qu", "g");
//   st = st.replace(searchRegExp, "K");
//   var searchRegExp = new RegExp("qU", "g");
//   st = st.replace(searchRegExp, "k");

//   // Eliminar c con sonido k por k
//   var searchRegExp = new RegExp("ca", "g");
//   st = st.replace(searchRegExp, "ka");
//   var searchRegExp = new RegExp("co", "g");
//   st = st.replace(searchRegExp, "ko");
//   var searchRegExp = new RegExp("cu", "g");
//   st = st.replace(searchRegExp, "ku");
//   var searchRegExp = new RegExp("Ca", "g");
//   st = st.replace(searchRegExp, "Ka");
//   var searchRegExp = new RegExp("Co", "g");
//   st = st.replace(searchRegExp, "Ko");
//   var searchRegExp = new RegExp("Cu", "g");
//   st = st.replace(searchRegExp, "Ku");
//   var searchRegExp = new RegExp("cA", "g");
//   st = st.replace(searchRegExp, "kA");
//   var searchRegExp = new RegExp("cO", "g");
//   st = st.replace(searchRegExp, "kO");
//   var searchRegExp = new RegExp("cU", "g");
//   st = st.replace(searchRegExp, "kU");
//   var searchRegExp = new RegExp("CA", "g");
//   st = st.replace(searchRegExp, "KA");
//   var searchRegExp = new RegExp("CO", "g");
//   st = st.replace(searchRegExp, "KO");
//   var searchRegExp = new RegExp("CU", "g");
//   st = st.replace(searchRegExp, "KU");

//   // Eliminar y con sonido i por i
//   var searchRegExp = new RegExp("y(?![a-zA-Z])", "g"); 
//   st = st.replace(searchRegExp, "i");
//   var searchRegExp = new RegExp("Y(?![a-zA-Z])", "g"); 
//   st = st.replace(searchRegExp, "I");
  
//   // // LATINOAMÉRICA: Eliminar c y z con sonido s (previamente c zon sonido z se ha sustituido por z)
//   // st = st.replaceAll("z", "s");
//   // st = st.replaceAll("Z", "S");

//   // //Eliminar gü si ya hemos eliminado el sonido j de la g
//   // st = st.replaceAll("gü", "g");
//   // st = st.replaceAll("gÜ", "g");
//   // st = st.replaceAll("GÜ", "G");
//   // st = st.replaceAll("Gü", "G");

//   // // Eliminar la w por la u (podría tener sonido gu o b, pero es menos común)
//   // st = st.replaceAll("w", "u");
//   // st = st.replaceAll("W", "U");

//   return st;
// }

