import './Hero.css';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

export default function Hero() {
    return (
        <div>
        <Header />
        <section className="hero d-flex align-items-center justify-content-center">
            <div className="container text-center">
                <h2>Cada xícara conta uma história</h2>
                <p>Bem-vindo ao Café do Amanhã, onde o aroma do café se mistura com a brisa do mar.</p>
            </div>
        </section>
        <Footer />
        </div>
    );
}

