const itensList = document.querySelector('.itens_list');

const itens = [
    {name: 'Big-Bacon', price: '23.90', image: 'x-bacon.jpg'},
    {name: 'Big-Burger', price: '19.90', image: 'x-burger.jpg'},
    {name: 'Big-Salada', price: '21.90', image: 'x-salada.jpg'},
    {name: 'Big-Futuro', price: '23.90', image: 'x-futuro.jpg'},
    {name: 'Burger-Bite', price: '25.90', image: 'o-burger-x.jpg'},
    {name: 'Double-Bite', price: '28.90', image: 'double-x.jpg'},
];

document.addEventListener('DOMContentLoaded', () => {

    let output = '';

    
    itens.forEach(({name, price, image}) => {

        output += `<div class="item_card">

                <img class="item_image" src="assets/${image}" alt="Big-Bacon">

                <div class="card_content">

                    <h2>${name}</h2>

                    <p class="item_price"><span class="less_price">R$ </span>${price}

                    <div class="item_rating">
                        <i class='bx bxs-star' ></i>
                        <i class='bx bxs-star' ></i>
                        <i class='bx bxs-star' ></i>
                        <i class='bx bxs-star' ></i>
                        <i class='bx bxs-star-half'></i>
                    </div><!--item_rating-->

                    <div class="item_options">

                        <a href="items_details.html?name=${name}&price=${price}&image=${image}" class="option_detail">Ver Detalhes</a>

                        <div class="icon_option">
                            <i class='bx bx-message-square-dots'></i>
                        </div>

                        <div class="icon_option">
                            <i class='bx bx-heart' ></i>
                        </div>

                    </div><!--item_options-->
                    

                </div><!--card_content-->

            </div><!--item_card-->`

    })


    itensList.innerHTML = output;

});