    const traducciones ={
        es:
        {
        tituloWeb: "Nueva York - Gastronomía diversa",
        Menuopc1: "Platos Icónicos",
        Menuopc2: "Diversidad Cultural",
        pbanner1: "La ciudad que nunca duerme",
        h1banner1: "NUEVA YORK:<br>SABORES<br>DEL MUNDO",
        pgeneral1: "<b>Nueva York</b> es una de las ciudades más icónicas y visitadas del mundo, destacándose no solo por su imponente arquitectura y cultura vibrante, sino también por su extraordinaria diversidad gastronómica. <br><br> La Gran Manzana es un reflejo de la inmigración y la fusión de culturas, lo que la convierte en una de las capitales culinarias más importantes del planeta.",
        pgeneral2: "En sus calles se pueden encontrar desde puestos de comida rápida hasta restaurantes de lujo con estrellas Michelin, ofreciendo una experiencia gastronómica única. <br> <br> Aquí, no solo se disfrutan los platos típicos de Estados Unidos, sino que también es posible saborear la cocina de casi cualquier país del mundo.",
        h1iconicdishes1: "Platos Icónicos de Nueva York",
        h1bagels: "1. Bagels",
        pbagels: "Estos panecillos redondos, con una textura esponjosa por dentro y crujiente por fuera, son un desayuno clásico en Nueva York. Se suelen acompañar con queso crema y salmón ahumado, aunque existen múltiples variaciones.",
        h1pizza: "2. Pizza estilo NY",
        ppizza: "Su característica masa delgada y flexible permite doblarla al comer, y suele servirse en porciones grandes. Es una comida imprescindible tanto para locales como para turistas.",
        h1hotdog: "3. Hot dog",
        photdog: "Disponibles en cualquier rincón de la ciudad, especialmente en carritos callejeros, los hot dogs neoyorquinos son sencillos pero icónicos, servidos con mostaza, kétchup, cebolla o chucrut.",
        pbanner2: "La gastronomía de Nueva York no solo se compone de platos tradicionales estadounidenses, sino que también ha sido moldeada por la inmigración y la diversidad de culturas presentes en la ciudad.",
        h1diverse: "La Diversidad Cultural en la Comida",
        h1arepa: "1. Arepa",
        parepa: "Provenientes de América Latina, especialmente de Venezuela y Colombia, estas tortillas de maíz rellenas han ganado popularidad en la ciudad gracias a la gran comunidad hispana.",
        h1dimsum: "2. Dim Sum",
        pdimsum: "Originario de la cocina china, el dim sum se ha convertido en una opción favorita en Chinatown y otros barrios de la ciudad. Sus dumplings y platillos fritos o al vapor son muy apreciados.",
        h1adja: "3. Adjarian Khachapuri",
        padja: "Este pan relleno de queso y huevo, originario de Georgia, ha encontrado un espacio en la creciente escena gastronómica de la ciudad, especialmente en Brooklyn.",
        footer: "2025 Nueva York - Gastronomía diversa"
    },
    en: {
        tituloWeb: "New York - Diverse gastronomy",
        Menuopc1: "Iconic Dishes",
        Menuopc2: "Cultural Diversity",
        pbanner1: "The city that never sleeps",
        h1banner1: "NEW YORK:<br>FLAVORS<br>OF THE WORLD",
        pgeneral1: "<b>New York</b> is one of the most iconic and visited cities in the world, standing out not only for its impressive architecture and vibrant culture, but also for its extraordinary culinary diversity. <br><br> The Big Apple reflects immigration and the fusion of cultures, making it one of the most important culinary capitals on the planet.",
        pgeneral2: "On its streets you can find everything from fast food stalls to luxury Michelin-starred restaurants, offering a unique culinary experience. <br><br> Here, you can enjoy not only typical American dishes but also food from nearly every country in the world.",
        h1iconicdishes1: "Iconic Dishes of New York",
        h1bagels: "1. Bagels",
        pbagels: "These round rolls, soft inside and crispy outside, are a classic New York breakfast. They’re usually served with cream cheese and smoked salmon, though many variations exist.",
        h1pizza: "2. NY style Pizza",
        ppizza: "Its thin, flexible crust allows it to be folded when eaten, and it's often served in large slices. It’s a must-try for both locals and tourists.",
        h1hotdog: "3. Hot dog",
        photdog: "Found on nearly every corner, especially in street carts, New York hot dogs are simple yet iconic, served with mustard, ketchup, onions, or sauerkraut.",
        pbanner2: "New York's gastronomy is not only made up of traditional American dishes but also shaped by the city's immigration and cultural diversity.",
        h1diverse: "Cultural Diversity in Food",
        h1arepa: "1. Arepa",
        parepa: "Originating from Latin America, especially Venezuela and Colombia, these stuffed corn cakes have gained popularity in the city thanks to the large Hispanic community.",
        h1dimsum: "2. Dim Sum",
        pdimsum: "From Chinese cuisine, dim sum has become a favorite option in Chinatown and other neighborhoods. Its dumplings and steamed or fried dishes are highly appreciated.",
        h1adja: "3. Adjarian Khachapuri",
        padja: "This cheese- and egg-filled bread from Georgia has found its place in the city's growing food scene, especially in Brooklyn.",
        footer: "2025 New York - Diverse Gastronomy"
        }
    };

    function cambiarIdioma(idioma) {

        if (idioma === 'es') {
            alert("¡Idioma Español!");
        } else if (idioma === 'en') {
            alert("English Language!"); 
        }
        
        const textos = traducciones[idioma];
        for (const id in textos) {
            if (id === "tituloWeb") {
            document.title = textos[id];
        } else {
            const el = document.getElementById(id);
            if (el) el.innerHTML = textos[id];
            
        }
        
    }
            
    }

    const banner = document.querySelector('.banner');
        const imagenes = [
        '/newyork-web/images/slide1.jpg',
        '/newyork-web/images/slide2.jpg',
        '/newyork-web/images/slide3.jpg'
        ];
        let index = 0;
    
        function cambiarImagen() {
        index = (index + 1) % imagenes.length;
        banner.style.backgroundImage = `url('${imagenes[index]}')`;
        }
    
        setInterval(cambiarImagen, 4000);