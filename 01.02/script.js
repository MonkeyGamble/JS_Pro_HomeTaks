let url = 'https://jsonplaceholder.typicode.com/photos';

fetch(url)
	.then(res => res.json())
	.then(data => {
		const array = data.filter(elem => elem.albumId === 35);
		render(array);
	});

const render = array => {
	const container = document.createElement('div');
	container.classList.add('container');
	container.style.display = 'grid';
	container.style.gridTemplateColumns = 'repeat(4, 1fr)';
	container.style.gap = '10px';

	array.forEach(elem => {
		const card = document.createElement('div');
		card.classList.add('card');

		const img = document.createElement('img');
		img.src = elem.url;
		img.alt = 'Picture';
		img.style.width = '200px';
		img.style.height = '200px';

		const title = document.createElement('h2');
		title.innerText = elem.title;

		card.append(img);
		card.append(title);
		container.append(card);
	});
	document.body.append(container);
};
