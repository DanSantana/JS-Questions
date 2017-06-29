
//original array
var array_q1 = ['a','b','c','d'];

//question_1
function question_1(element, array){

	var array2_q1=[];

	for (var i = 0; i < array.length; i++) {
		var item = array[i];
		if (item==element) {
			continue;
		}
		array2_q1.push(item);
	}
	return array2_q1;
}

//question_2
var array_q2 = ['Bonito','Alice','Zoreia','Cabeca']

function question_2(array){

	var array2_q2=[];
	for (var i = 0; i < array.length; i++) {
		array2_q2[i]=array[i];
	}
	array2_q2.sort();
	return array2_q2;
}
//question_3
var array_q3 = [333,750,252,321,456,111]

function question_3(array){

	var array2_q3=[];
	for (var i = 0; i < array.length; i++) {
		array2_q3[i]=array[i];
	}
	array2_q3.sort();
	return array2_q3;
}
//question_4
var array_q4 = ['oscar_alho','zoreia_mama','bonito_trovisk','cabeca_galeno']

function question_4(array){

	var array2_q4=[];

	for (var i = 0; i < array.length; i++) {
		var name = array[i].split('_');
		var finalItem = name[0].charAt(0).toUpperCase() + name[0].slice(1);
		finalItem += ' ' +name[1].charAt(0).toUpperCase() + name[1].slice(1);
		array2_q4.push(finalItem);
	}
	return array2_q4;
}
//question_5 

var array_q5 = [{	city:	"Joliette",	province:	"QC"	},
				{	city:	"Sudbury",	province:	"ON"	},
				{	city:	"Campbell	River",	province:	"BC"}];

var array_q5_bad = [{	city:	"Joliette",	province:	"QC"	},
				{	city:	"Sudbury",	province:	"ON"	},
				{	city:	"Campbell	River"}];


function question_5(element, array){

	var optimist = true;
	
	for (var i = 0; i < array.length; i++) {
		
		if (!array[i].hasOwnProperty(element)) {

			optimist=false;
			break;
		}
	}
	return optimist;
}