import React from 'react';
import './Stories.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Stories() {
    return (
        <div>
            <Header />
        <section className="stories-section">
            <div className="container">
                <h1>Histórias</h1>
                <p>Descubra as histórias inspiradoras que fazem parte do Café do Amanhã. <br/> Desde as viagens aventureiras de Maria até as serenatas à beira-mar de Pedro, cada momento é uma celebração de suas paixões.</p>

                <div className="story-list">
                    <div className="story">
                        <h2>Rock nas Estradas</h2>
                        <p>
                            Maria sempre teve uma alma inquieta, apaixonada por viagens e pela liberdade que só a estrada pode oferecer. Durante uma viagem pelo interior do Brasil, ao som de suas bandas de rock favoritas, ela descobriu um pequeno café escondido em uma vila remota. Inspirada pelo lugar, decidiu trazer essa experiência única para o Café do Amanhã, onde o aroma do café se mistura com a trilha sonora de suas aventuras.
                        </p>
                    </div>
                    <div className="story">
                        <h2>MPB à Beira-Mar</h2>
                        <p>
                            Priscila, por outro lado, encontra a verdadeira paz ao som das ondas do mar e de uma boa música brasileira. Sua paixão pela MPB é evidente em cada detalhe do Café do Amanhã, onde as melodias de grandes ícones como Vinícius de Moraes e Tom Jobim preenchem o ambiente. Foi em uma noite tranquila, sentado na areia e ouvindo "Garota de Ipanema", que ela teve a ideia de criar um espaço onde música e café se encontram em perfeita harmonia.
                        </p>
                    </div>
                    <div className="story">
                        <h2>Um Encontro de Paixões</h2>
                        <p>
                            Quando Priscila, Maria e Pedro se conheceram, parecia que o destino havia reunido almas complementares. Os três amigos decidiram unir o as inspirações das viagens de Maria e o amor que Priscila e Pedro compartilham pela música. Juntos, transformaram o Café do Amanhã em um lugar onde cada visita é uma nova história, cada xícara de café um novo capítulo, e cada canção no ar uma celebração de suas paixões.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </div>
    );
}

export default Stories;