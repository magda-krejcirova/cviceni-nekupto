const product1 = {
  image: 'images/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description: 'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'images/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description: 'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'images/anatoplavky.jpg',
  name: 'Anatoplavky',
  description: 'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

const product1HTML = `
    <img class="card-img-top" src="images/destniklobouk.jpg" alt="Card image cap">
    <div class="card-body">
          <h2 class="card-title">Deštníklobouk</h2>
          <p class="card-text">Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou
            přeháňkou.</p>

    </div>
    <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`
const product1Elm = document.querySelector('#product1');
product1Elm.innerHTML = product1HTML;
