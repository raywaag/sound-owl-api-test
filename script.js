const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://raywaag.github.io/sound-owl-api/api/artists?access_token=0s4I3w1cCKctvaOdnfKPn8kjFT2pT33bML99u6ETp4aGoFttJDDJKUMHyPDyYUXk', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(artists => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const img = document.createElement('img');
       img.src = artists.picture;
       img.setAttribute('width','200px');
       img.setAttribute('height','auto');

      const h1 = document.createElement('h1');
      h1.textContent = artists.name;

      container.appendChild(card);
      card.appendChild(img);
      card.appendChild(h1);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Houston, we have a problem.`;
    app.appendChild(errorMessage);
  }
}

request.send();