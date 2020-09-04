
function sin_faltas(st) {
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
	var searchRegExp = new RegExp("Ci", "g");
	st = st.replace(searchRegExp, "Zi");
	var searchRegExp = new RegExp("CE", "g");
	st = st.replace(searchRegExp, "ZE");
	var searchRegExp = new RegExp("CI", "g");
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
	var searchRegExp = new RegExp("c(?![hH])", "g");
	st = st.replace(searchRegExp, "k");
	var searchRegExp = new RegExp("C(?![hH])", "g");
	st = st.replace(searchRegExp, "K");

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

function replaceInElement(element, find, replace) {
    // iterate over child nodes in reverse, as replacement may increase
    // length of child node list.
    for (var i= element.childNodes.length; i-->0;) {
        var child= element.childNodes[i];
        if (child.nodeType==1) { // ELEMENT_NODE
            var tag= child.nodeName.toLowerCase();
            if (tag!='style' && tag!='script') // special case, don't touch CDATA elements
                replaceInElement(child, find, replace);
        } else if (child.nodeType==3) { // TEXT_NODE
            replaceInText(child, find, replace);
        }
    }
}

function replaceInText(text, find, replace) {
    var match;
    var matches= [];
    while (match= find.exec(text.data))
        matches.push(match);
    for (var i= matches.length; i-->0;) {
        match= matches[i];
        text.splitText(match.index);
        text.nextSibling.splitText(match[0].length);
        text.parentNode.replaceChild(replace(match), text.nextSibling);
    }
}

// $(document).ready(function(){
	// keywords to match. This *must* be a 'g'lobal regexp or it'll fail bad
	var find= /\b(.*[a-zA-Z].*)\b/gi;

	// replace matched strings with wiki links
	replaceInElement(document.body, find, function(match) {
	    return(document.createTextNode(sin_faltas(match[0])));
	});

// });
