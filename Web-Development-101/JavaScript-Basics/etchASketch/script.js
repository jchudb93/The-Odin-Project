let container = document.querySelector('.container');
let input = document.querySelector('input');
let newGrid = document.querySelector('#new-grid')
let contArea = container.clientWidth;

newGrid.addEventListener('click',(e)=>{
	let value = parseInt(input.value);
	if(value == isNaN || value > 100){
		console.log(value);
		return;
	}

	while(container.firstChild){
		container.removeChild(container.firstChild);
	}


	createGrid(value);
	e.preventDefault();
});

const createSquare = (size) =>{
	let div = document.createElement('div');
	div.classList.add('square');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    return div;
}

const createGrid = (side) => {
	for(i = 0; i <side*side;i++){
		container.appendChild(createSquare(contArea / side));
	};
	console.log('exito');

	let allSquares = document.querySelectorAll('.square');
		allSquares.forEach(square => {
			square.addEventListener('mouseover', function(event){
				event.target.style.background = '#ff4468';
			})
		});
}

createGrid(50);