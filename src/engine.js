let settings = {
	'notation': 'std',
	'inputMode': 'case',
	'background': '#ffffff',
	'borderWidth': '1',
	'imageSize': '200',
	'moves': '',
	'initialFacets': 'yyyyyyyyywwwwwwwwwbbbbbbbbbgggggggggrrrrrrrrrooooooooo'
};
function set(setting, value) {
	console.log('setting', setting, ':', value);
	settings[setting] = value;
	update();
}

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

let moves = document.querySelector('#moves');
moves.addEventListener('input', ()=>{set('moves', moves.value)});
moves.addEventListener('propertychange', ()=>{set('moves', moves.value)});

let initialFacets = document.querySelector('#facets');
initialFacets.addEventListener('input', ()=>{set('initialFacets', initialFacets.value)});
initialFacets.addEventListener('propertychange', ()=>{set('initialFacets', initialFacets.value)});

function update(){
	setSize();
	draw2D(applyMoves(settings['inputMode'], settings['notation'], settings['initialFacets'], settings['moves']));
}
function setSize(){
	moves.style.height = settings['imageSize']+'px';
	canvas.height = settings['imageSize'];
	canvas.width = settings['imageSize'];
}
function cycle(facets, cycle){
	let facetarr = facets.split("");
	[facetarr[cycle[0]], facetarr[cycle[1]], facetarr[cycle[2]], facetarr[cycle[3]]] =
	[facetarr[cycle[3]], facetarr[cycle[0]], facetarr[cycle[1]], facetarr[cycle[2]]];
	return facetarr.join("");
}
function applyMoves(movetype, note, facets, moves){
	if(note == "std"){
		let turns = moves.split(/\s|\n|\t/);
		if(movetype == "alg"){
			for(let turn of turns){
				switch(turn){
					case "R":
						facets = cycle(facets, [2, 29, 11, 20]);
						facets = cycle(facets, [5, 32, 14, 23]);
						facets = cycle(facets, [8, 35, 17, 26]);
	
						facets = cycle(facets, [36, 38, 44, 42]);
						facets = cycle(facets, [39, 37, 41, 43]);
						break;
					case "R'":
						facets = applyMoves("alg", "std", facets, "R R R");
						break;
					case "R2":
						facets = applyMoves("alg", "std", facets, "R R");
						break;
	
					case "L":
						facets = cycle(facets, [0, 18, 9, 27]);
						facets = cycle(facets, [3, 21, 12, 30]);
						facets = cycle(facets, [6, 24, 15, 33]);
	
						facets = cycle(facets, [47, 53, 51, 45]);
						facets = cycle(facets, [50, 52, 48, 46]);
						break;
					case "L'":
						facets = applyMoves("alg", "std", facets, "L L L");
						break;
					case "L2":
						facets = applyMoves("alg", "std", facets, "L L");
						break;
	
					case "U":
						facets = cycle(facets, [33, 36, 20, 53]);
						facets = cycle(facets, [34, 39, 19, 50]);
						facets = cycle(facets, [35, 42, 18, 47]);
	
						facets = cycle(facets, [0, 2, 8, 6]);
						facets = cycle(facets, [1, 5, 7, 3]);
						break;
					case "U'":
						facets = applyMoves("alg", "std", facets, "U U U");
						break;
					case "U2":
						facets = applyMoves("alg", "std", facets, "U U");
						break;
	
					case "D":
						facets = cycle(facets, [24, 44, 29, 45]);
						facets = cycle(facets, [25, 41, 28, 48]);
						facets = cycle(facets, [26, 38, 27, 51]);
	
						facets = cycle(facets, [9, 11, 17, 15]);
						facets = cycle(facets, [10, 14, 16, 12]);
						break;
					case "D'":
						facets = applyMoves("alg", "std", facets, "D D D");
						break;
					case "D2":
						facets = applyMoves("alg", "std", facets, "D D");
						break;
	
					case "F":
						facets = cycle(facets, [6, 42, 11, 51]);
						facets = cycle(facets, [7, 43, 10, 52]);
						facets = cycle(facets, [8, 44, 9, 53]);
	
						facets = cycle(facets, [18, 20, 26, 24]);
						facets = cycle(facets, [19, 23, 25, 21]);
						break;
					case "F'":
						facets = applyMoves("alg", "std", facets, "F F F");
						break;
					case "F2":
						facets = applyMoves("alg", "std", facets, "F F");
						break;
	
					case "B":
						facets = cycle(facets, [0, 45, 17, 36]);
						facets = cycle(facets, [1, 46, 16, 37]);
						facets = cycle(facets, [2, 47, 15, 38]);
	
						facets = cycle(facets, [27, 29, 35, 33]);
						facets = cycle(facets, [28, 32, 34, 30]);
						break;
					case "B'":
						facets = applyMoves("alg", "std", facets, "B B B");
						break;
					case "B2":
						facets = applyMoves("alg", "std", facets, "B B");
						break;
					
	
					case "r":
						facets = applyMoves("alg", "std", facets, "R M'");
						break;
					case "r'":
						facets = applyMoves("alg", "std", facets, "r r r");
						break;
					case "r2":
						facets = applyMoves("alg", "std", facets, "r r");
						break;
	
					case "l":
						facets = applyMoves("alg", "std", facets, "L M");
						break;
					case "l'":
						facets = applyMoves("alg", "std", facets, "l l l");
						break;
					case "l2":
						facets = applyMoves("alg", "std", facets, "l l");
						break;
	
					case "u":
						facets = applyMoves("alg", "std", facets, "U E'");
						break;
					case "u'":
						facets = applyMoves("alg", "std", facets, "u u u");
						break;
					case "u2":
						facets = applyMoves("alg", "std", facets, "u u");
						break;
	
					case "d":
						facets = applyMoves("alg", "std", facets, "D E");
						break;
					case "d'":
						facets = applyMoves("alg", "std", facets, "d d d");
						break;
					case "d2":
						facets = applyMoves("alg", "std", facets, "d d");
						break;
	
					case "f":
						facets = applyMoves("alg", "std", facets, "F S");
						break;
					case "f'":
						facets = applyMoves("alg", "std", facets, "f f f");
						break;
					case "f2":
						facets = applyMoves("alg", "std", facets, "f f");
						break;
	
					case "b":
						facets = applyMoves("alg", "std", facets, "B S'");
						break;
					case "b'":
						facets = applyMoves("alg", "std", facets, "b b b");
						break;
					case "b2":
						facets = applyMoves("alg", "std", facets, "b b");
						break;
	
	
					case "M":
						facets = cycle(facets, [1, 19, 10, 28]);
						facets = cycle(facets, [4, 22, 13, 31]);
						facets = cycle(facets, [7, 25, 16, 34]);
						break;
					case "M'":
						facets = applyMoves("alg", "std", facets, "M M M");
						break;
					case "M2":
						facets = applyMoves("alg", "std", facets, "M M");
						break;
	
					case "E":
						facets = cycle(facets, [21, 43, 32, 46]);
						facets = cycle(facets, [22, 40, 31, 49]);
						facets = cycle(facets, [23, 37, 30, 52]);
						break;
					case "E'":
						facets = applyMoves("alg", "std", facets, "E E E");
						break;
					case "E2":
						facets = applyMoves("alg", "std", facets, "E E");
						break;
	
					case "S":
						facets = cycle(facets, [3, 39, 14, 48]);
						facets = cycle(facets, [4, 40, 13, 49]);
						facets = cycle(facets, [5, 41, 12, 50]);
						break;
					case "S'":
						facets = applyMoves("alg", "std", facets, "S S S");
						break;
					case "S2":
						facets = applyMoves("alg", "std", facets, "S S");
						break;
	
	
					case "x":
						facets = applyMoves("alg", "std", facets, "R M' L'");
						break;
					case "x'":
						facets = applyMoves("alg", "std", facets, "x x x");
						break;
					case "x2":
						facets = applyMoves("alg", "std", facets, "x x");
						break;
	
					case "y":
						facets = applyMoves("alg", "std", facets, "U E' D'");
						break;
					case "y'":
						facets = applyMoves("alg", "std", facets, "y y y");
						break;
					case "y2":
						facets = applyMoves("alg", "std", facets, "y y");
						break;
	
					case "z":
						facets = applyMoves("alg", "std", facets, "F S B'");
						break;
					case "z'":
						facets = applyMoves("alg", "std", facets, "z z z");
						break;
					case "z2":
						facets = applyMoves("alg", "std", facets, "z z");
						break;
				}
			}
		}
		if(movetype == "case"){
			turns.reverse();
			for(let turn of turns){
				facets = applyMoves("alg", note, facets, turn);
				facets = applyMoves("alg", note, facets, turn);
				facets = applyMoves("alg", note, facets, turn);
			}
		}
	}
	if(note == "vcn"){
		let turns = moves.split("");
		if(movetype == "alg"){
			for(let turn of turns){
				switch(turn){
					case "5":
					case "6":
						facets = applyMoves("alg", "std", facets, "M");
						break;

					case "q":
						facets = applyMoves("alg", "std", facets, "z'");
						break;
					case "p":
						facets = applyMoves("alg", "std", facets, "z");
						break;

					case "w":
						facets = applyMoves("alg", "std", facets, "B");
						break;
					case "o":
						facets = applyMoves("alg", "std", facets, "B'");
						break;

					case "e":
						facets = applyMoves("alg", "std", facets, "L'");
						break;
					case "i":
						facets = applyMoves("alg", "std", facets, "R");
						break;

					case "r":
						facets = applyMoves("alg", "std", facets, "l'");
						break;
					case "u":
						facets = applyMoves("alg", "std", facets, "r");
						break;

					case "t":
					case "y":
						facets = applyMoves("alg", "std", facets, "x");
						break;

					case "a":
						facets = applyMoves("alg", "std", facets, "y'");
						break;
					case ";":
						facets = applyMoves("alg", "std", facets, "y");
						break;

					case "s":
						facets = applyMoves("alg", "std", facets, "D");
						break;
					case "l":
						facets = applyMoves("alg", "std", facets, "D'");
						break;

					case "d":
						facets = applyMoves("alg", "std", facets, "L");
						break;
					case "k":
						facets = applyMoves("alg", "std", facets, "R'");
						break;

					case "f":
						facets = applyMoves("alg", "std", facets, "U'");
						break;
					case "j":
						facets = applyMoves("alg", "std", facets, "U");
						break;

					case "g":
						facets = applyMoves("alg", "std", facets, "F'");
						break;
					case "h":
						facets = applyMoves("alg", "std", facets, "F");
						break;

					case "z":
						facets = applyMoves("alg", "std", facets, "d");
						break;
					case "/":
						facets = applyMoves("alg", "std", facets, "d'");
						break;

					case "x":
						facets = applyMoves("alg", "std", facets, "M'");
						break;
					case ".":
						facets = applyMoves("alg", "std", facets, "M");
						break;

					case "c":
						facets = applyMoves("alg", "std", facets, "u'");
						break;
					case ",":
						facets = applyMoves("alg", "std", facets, "u");
						break;

					case "v":
						facets = applyMoves("alg", "std", facets, "l");
						break;
					case "m":
						facets = applyMoves("alg", "std", facets, "r'");
						break;

					case "b":
						facets = applyMoves("alg", "std", facets, "x'");
						break;
				}
			}
		}
		if(movetype == "case"){
			turns.reverse();
			for(let turn of turns){
				facets = applyMoves("alg", note, facets, turn);
				facets = applyMoves("alg", note, facets, turn);
				facets = applyMoves("alg", note, facets, turn);
			}
		}
	}
	return facets;
}
function draw2D(facets){
	let SIZE = settings['imageSize'];

	ctx.fillStyle = settings['background'];
	ctx.fillRect(0, 0, SIZE, SIZE);

	ctx.fillStyle = "black";
	ctx.fillRect(SIZE*0.2, 0, SIZE*0.6, SIZE);
	ctx.fillRect(0, SIZE*0.2, SIZE, SIZE*0.6);
	
	// U
	fillSquare(SIZE*0.2, SIZE*0.2, facets[0]);
	fillSquare(SIZE*0.4, SIZE*0.2, facets[1]);
	fillSquare(SIZE*0.6, SIZE*0.2, facets[2]);
	fillSquare(SIZE*0.2, SIZE*0.4, facets[3]);
	fillSquare(SIZE*0.4, SIZE*0.4, facets[4]);
	fillSquare(SIZE*0.6, SIZE*0.4, facets[5]);
	fillSquare(SIZE*0.2, SIZE*0.6, facets[6]);
	fillSquare(SIZE*0.4, SIZE*0.6, facets[7]);
	fillSquare(SIZE*0.6, SIZE*0.6, facets[8]);
	
	// F
	fillSquare(SIZE*0.2, SIZE*0.8, facets[18]);
	fillSquare(SIZE*0.4, SIZE*0.8, facets[19]);
	fillSquare(SIZE*0.6, SIZE*0.8, facets[20]);

	// B
	fillSquare(SIZE*0.2, 0, facets[33]);
	fillSquare(SIZE*0.4, 0, facets[34]);
	fillSquare(SIZE*0.6, 0, facets[35]);

	// R
	fillSquare(SIZE*0.8, SIZE*0.2, facets[36]);
	fillSquare(SIZE*0.8, SIZE*0.4, facets[39]);
	fillSquare(SIZE*0.8, SIZE*0.6, facets[42]);

	// L
	fillSquare(0, SIZE*0.2, facets[47]);
	fillSquare(0, SIZE*0.4, facets[50]);
	fillSquare(0, SIZE*0.6, facets[53]);
}
function fillSquare(x, y, c){
	let SIZE = settings['imageSize'];
	let BORDERWIDTH = settings['borderWidth']*0.005;
	switch(c){
		case "y":
			ctx.fillStyle = "yellow";
			break;
		case "w":
			ctx.fillStyle = "white";
			break;
		case "b":
			ctx.fillStyle = "blue";
			break;
		case "g":
			ctx.fillStyle = "green";
			break;
		case "r":
			ctx.fillStyle = "red";
			break;
		case "o":
			ctx.fillStyle = "orange";
			break;
		default:
			ctx.fillStyle = "black";
	}
	ctx.fillRect(x+(SIZE*BORDERWIDTH), y+(SIZE*BORDERWIDTH), SIZE*0.2-2*(SIZE*BORDERWIDTH), SIZE*0.2-2*(SIZE*BORDERWIDTH));
}
update();

function saveImage(){
	window.electronAPI.save(settings);
}