function pintarTablas() {  

    const preguntas = ["¿Quién es considerado el hombre que inventó el teléfono?", "Este planeta gira más rápido, completando una rotación completa en solo 10 horas. ¿Qué planeta es?", "¿Cuál es la sustancia natural más dura de la Tierra?", "¿Cuántos dientes tiene un ser humano adulto?", "Este animal fue el primero en ser lanzado al espacio. La ataron a la nave espacial soviética Sputnik 2 que fue enviada al espacio exterior el 3 de noviembre de 1957. ¿Cuál era su nombre?", "¿Quién fue la primera mujer en el espacio?", "¿En qué parte del cuerpo humano se encuentran la mayoría de las glándulas sudoríparas?", "¿cuánto tarda la luz del sol en llegar a la Tierra?", "¿Cuántos huesos hay en el cuerpo humano?", "¿Cómo se llama el proceso de descomposición de los alimentos?"];

    const respuestas = ["Graham Bell", "Júpiter", "Diamante", "32", "Laika", "Valentina tereshkova", "Parte inferior de los pies", "8 minutos", "206", "Digestión"];

    const respuesFalsas = ["Newton", "Tesla", "Telefonica", "Marte", "Pandora", "Tatooine", "Hulk", "Titanio", "Adamantium", "23", "58", "1024", "Lassie", "Scooby-DO", "Snoopy", "Capitana Marvel", "Belén Esteban", "Marie Curie", "Las axilas", "Los ojos", "Las pestañas", "8 horas", "8 dias", "8 nanosegundos", "207", "307", "308", "Implosión", "Desintegración", "Hadouken"]

    let contador = 0

    for (let i = 0; i < preguntas.length; i++) {

        let respuestasAleatorias = [];
        
        
        respuestasAleatorias.push(respuestas[i])
        respuestasAleatorias.push(respuesFalsas[contador++])
        respuestasAleatorias.push(respuesFalsas[contador++])
        respuestasAleatorias.push(respuesFalsas[contador++])


        let template = `<table border="2px">
                                        <th colspan="2"><label>${preguntas[i]}</label></th>
                                        <tr>
                                            <td>
                                                <input type="radio"/>
                                                <label>${respuestasAleatorias[0]}</label>
                                                
                                            </td>
                                            <td>
                                                <input type="radio"/>
                                                <label>${respuestasAleatorias[1]}</label>
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="radio"/>
                                                <label>${respuestasAleatorias[2]}</label>
                                                
                                            </td>
                                            <td>
                                                <input type="radio"/>
                                                <label>${respuestasAleatorias[3]}</label>
                                                
                                            </td>
                                        </tr>
                                </table>`;

                document.getElementById("contenedor").innerHTML += template;
        
    }
                
}

pintarTablas();