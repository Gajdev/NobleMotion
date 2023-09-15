fetch('data.json')
.then(response => response.json())
.then(data => {
    const carsCollection = document.querySelector('.cars-collection');
    data.forEach(car=>{
        const carCard = document.createElement('div');
        carCard.className= 'cars-card';
        carCard.innerHTML = `
        <img class="main-img" src="${car.imgSrc}">
        <div class="cars-des-price">
           <p>${car.name}</p>
           <h2>${car.price}<span>/day</span></h2>
        </div>
        <div class="card-infos">
           <div class="card-info">
              <img src="./img/speedometer-01.svg">
              <p>${car.speed}</p>
           </div>
           <div class="card-info">
              <img src="./img/manual-gearbox.svg">
              <p>${car.transmission}</p>
           </div>
           <div class="card-info">
              <img src="./img/users-01.svg">
              <p>${car.capacity}</p>
           </div>
           <div class="card-info">
              <img src="./img/gas-station.svg">
              <p>${car.fuelType}</p>
           </div>
        </div>
        <button>Rent now</button>
     `;
     carsCollection.appendChild(carCard);
    });
})
.catch(error => console.error('Error fetching data:', error));