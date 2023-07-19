import Logo from '../Assets/Images/logo.png'
const Footer = () => {
    return (
        <footer className="footer-dark">
            <div className="container">

                <div className="row">

                    <div className="col-md-4">

                    </div>

                    <div className="col-md-4 text-center">
                        <img className="logo mb-3" src={Logo} />
                        <p>Welcome to our gaming and programming apparel store! We are passionate about creating high-quality t-shirts that reflect your love for gaming and coding. Our mission is to provide you with comfortable and stylish clothing that enhances your unique style. Thank you for choosing us and happy shopping! 🎮💻👕</p>
                    </div>

                    <div className="col-md-4">

                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer