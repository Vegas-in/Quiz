const preguntas = ["¿Quién es considerado el hombre que inventó el teléfono?", "Este planeta gira más rápido, completando una rotación completa en solo 10 horas. ¿Qué planeta es?", "¿Cuál es la sustancia natural más dura de la Tierra?", "¿Cuántos dientes tiene un ser humano adulto?", "Este animal fue el primero en ser lanzado al espacio. La ataron a la nave espacial soviética Sputnik 2 que fue enviada al espacio exterior el 3 de noviembre de 1957. ¿Cuál era su nombre?", "¿Quién fue la primera mujer en el espacio?", "¿En qué parte del cuerpo humano se encuentran la mayoría de las glándulas sudoríparas?", "¿cuánto tarda la luz del sol en llegar a la Tierra?", "¿Cuántos huesos hay en el cuerpo humano?", "¿Cómo se llama el proceso de descomposición de los alimentos?"];

const respuestas = ["Graham Bell", "Júpiter", "Diamante", "32", "Laika", "Valentina tereshkova", "Parte inferior de los pies", "8 minutos", "206", "Digestión"];

const respuesFalsas = ["Newton", "Tesla", "Manolo de Telefonica", "Marte", "Pandora", "Tatooine", "Hulk", "Titanio", "Adamantium", "23", "58", "1024", "Lassie", "Scooby-DO", "Snoopy", "Capitana Marvel", "Belén Esteban", "Marie Curie", "Las axilas", "Los ojos", "Las pestañas", "8 horas", "8 dias", "8 nanosegundos", "207", "307", "308", "Implosión", "Desintegración", "Hadouken"]



function shuffle (array){                 // funcion copiada para solucionar el probelma de mezclar las posiciones de las respuestas
    array.sort(()=> Math.random() -0.5);
}

function pintarTablas() {  

    let contador = 0

    for (let i = 0; i < preguntas.length; i++) {

        let respuestasAleatorias = [];
        
        respuestasAleatorias.push(respuestas[i])
        respuestasAleatorias.push(respuesFalsas[contador++])
        respuestasAleatorias.push(respuesFalsas[contador++])
        respuestasAleatorias.push(respuesFalsas[contador++])
        shuffle(respuestasAleatorias)

        let template = `<table class="tabla">
                                        <th colspan="2"><label><h2>${preguntas[i]}</h2></label></th>
                                        <tr>
                                            <td class="inputColor1">
                                                <input type="radio" id="resp${i}"  value="${respuestasAleatorias[0]}"/>
                                                <label>${respuestasAleatorias[0]}</label>
                                            </td>
                                            <td class="inputColor2">
                                                <input type="radio" id="resp${i}" value="${respuestasAleatorias[1]}"/>
                                                <label>${respuestasAleatorias[1]}</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="inputColor3">
                                                <input type="radio" id="resp${i}" value="${respuestasAleatorias[2]}"/>
                                                <label>${respuestasAleatorias[2]}</label>
                                                
                                            </td>
                                            <td class="inputColor4">
                                                <input type="radio" id="resp${i}" value="${respuestasAleatorias[3]}"/>
                                                <label>${respuestasAleatorias[3]}</label>
                                            </td>
                                        </tr>
                                </table>`;

                document.getElementById("pregYRespu").innerHTML += template;
        
    }
    
}



document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let respUsuario = [];

    let msj = ""

    respUsuario.push(event.target.resp0.value);
    respUsuario.push(event.target.resp1.value);
    respUsuario.push(event.target.resp2.value);
    respUsuario.push(event.target.resp3.value);
    respUsuario.push(event.target.resp4.value);
    respUsuario.push(event.target.resp5.value);
    respUsuario.push(event.target.resp6.value);
    respUsuario.push(event.target.resp7.value);
    respUsuario.push(event.target.resp8.value);
    respUsuario.push(event.target.resp9.value);
    
    for (let i = 0; i < respUsuario.length; i++) {
        if (respUsuario[i] == respuestas[i]) {
        msj += `Has acertado, la respuesta correcta es ${respuestas[i]} \n`;
       } 
       else{
        msj += `Has fallado, la respuesta correcta es ${respuestas[i]} \n`;
       }
        
    }
    alert("Este es el resultado:\n" + msj)
    event.target.submit();
});


pintarTablas();







