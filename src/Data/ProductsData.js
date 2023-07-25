const ProductsData=()=>{
    return([
        {
            IdProduct:1,
            nameProduct:"Sloth Game Tshirt",
            typeShirt:"Classic Crew Neck",
            atributeShirt:"Comfortsoft T-Shirt",
            priceProduct:21.99,
            type:"Featured",
            slug:"sloth-game-tshirt",
            cant:1,
            imageFront:"imagen del frente",            
            imageBack:"https://localhost:3000/products/imagen-front-camiseta-1.jpg"
        },
        {
            IdProduct:2,
            nameProduct:"Grafiti Game Shirt",
            typeShirt:"Classic Crew Neck",
            atributeShirt:"Comfortsoft T-Shirt",
            priceProduct:23.99,
            cant:1,
            type:"Featured",
            slug:"grafiti-game-shirt"
        },
        {
            IdProduct:3,
            nameProduct:"SkullColor Game Shirt",
            typeShirt:"Classic Crew Neck",
            atributeShirt:"Comfortsoft T-Shirt",
            priceProduct:29.99,
            cant:1,
            type:"Promo",
            slug:"skullcolor-game-shirt"
        }
    ])
}

export default ProductsData