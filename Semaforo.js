/* ACTIVIDAD - Juego del semaforo.

    Crea un mensaje en pantalla que muestre 3 colores a elegir: 
    verde, amarillo, rojo.
    Guarda la respuesta en una variable llamada color.

    Ejemplo: Elige un color para iniciar:
    1) verde
    2) amarillo
    3) rojo
    OTRO) Opcion invalida


    Si se ingresa un color valido, crea otro mensaje en pantalla que muestre una situacion con el color 
    ingresado previamente y 3 opciones a elegir: Pasar normalmente, Acelerar y Esperar.
    Guarda la respuesta en una variable llamada accion.

    Ejemplo: 
        - El semaforo esta de color rojo(variable color), ¿Que desea hacer?
        1) Pasar normalmente
        2) Acelerar
        3) Esperar
        OTRO) Opcion invalida


    Luego crea la logica con Switch-Case que evalue las respuestas ingresadas en el navegador
    y en base a ello inicie un caso.


    En caso de que la luz sea verde, evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Bien hecho!, pasaste en el momento adecuado ✅, ¡Has ganado! 😁
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Oh no!, Aceleraste demasiado y chocaste 💥, ¡Has perdido! 😞
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! ❌
    - De lo contrario
        mostrar un mensaje que diga: Respuesta invalida.
    
    
    En caso de que la luz sea amarillo, evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Oh no!, No aceleraste lo suficiente y te han chocado 💥, ¡Has perdido! ❌
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Bien hecho!, pasaste en el momento justo ✅, ¡Has ganado! 😁
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! 😞
    - De lo contrario
        mostrar un mensaje que diga: Respuesta invalida.


    En caso de que la luz sea rojo, evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Oh no!, Pasaste en el momento indebido ❌, ¡Has perdido! 😞
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Oh no!, Crusaste mientras autos en otra direccion pasaban y chocaste 💥, ¡Has Perdido! ❌
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Bien hecho!, Esperaste en el momento adecuado ✅, ¡Has ganado! 😁
    - De lo contrario
        mostrar un mensaje que diga: Respuesta invalida.


    PISTA: en algun momento necesitaras usar if y OR/||
    PISTA 2: Para los mensajes de retorno puedes usar alert() o console.log()
*/


let color_verde, color_amarillo, color_rojo, color_varibale;

color_varibale = +prompt(
` 
       🚦 SEMÁFORO 🚦
  ⬇ Debes elegir un color ⬇
        🔴 1. ROJO
        🟡 2. AMARILLO
        🟢 3. VERDE `)

switch (color_varibale){
        case 1:
            color_rojo = +prompt(`
    Elegiste el color ROJO 🔴, ahora, ¿Que debes hacer?
        1. FRENAR 🚗
        2. DISMINUIR LA VELOCIDAD 🚘
        3. AUMENTAR LA VELOCIDAD 🏁 `)
                            switch (color_rojo){
                                case 1:
                                    alert (`
                                    😇¡BUENA ELECCIÓN!😇 
           ✅Frenaste en el tiempo indicado y evitaste un accidente✅
                                    `)
                                    break;
                                case 2:
                                    alert (`
                                           👀¡CUIDADO!👀
⚠ No es una opción recomendable, puedes ocasionar un accidente ⚠
                                    `)
                                    break;
                                case 3:
                                    alert (`
                                       🤦‍♂️¡MALA ELECCION!🤦‍♂️ 
                    ❌OCASIONASTE UN ACCIDENTE TERRIBLE❌`)
                                default:
                                    alert ("La opción ingresada, no es valida.")
                                    break;
                            }
            break;
        case 2:
            color_amarillo = +prompt(`
    Elegiste el color AMARILLO 🟡, ahora, ¿Que debes hacer?
        1. FRENAR 🚗
        2. DISMINUIR LA VELOCIDAD 🚘
        3. AUMENTAR LA VELOCIDAD 🏁 `)

        switch (color_amarillo){
            case 1:
                alert (`
                                           👀¡CUIDADO!👀
⚠ No es una opción recomendable, puedes ocasionar un accidente ⚠
                `)
                break;
            case 2:
                alert (`
                                   😇¡BUENA ELECCIÓN!😇
✅Disminuiste la velocidad y frenaste en el momento adecuado✅
                `)
                break;
            case 3:
                alert (`
                                   🤦‍♂️¡MALA ELECCION!🤦‍♂️ 
                ❌OCASIONASTE UN ACCIDENTE TERRIBLE❌`)
            default:
                alert ("La opción ingresada, no es valida.")
                break;
        }
            break;

        case 3:
            color_verde = +prompt(`
    Elegiste el color VERDE 🟢, ahora, ¿Que debes hacer?
        1. FRENAR 🚗
        2. DISMINUIR LA VELOCIDAD 🚘
        3. AUMENTAR LA VELOCIDAD 🏁 `)

        switch (color_verde){
            case 1:
                alert (`
                                  🤦‍♂️¡MALA ELECCION!🤦‍♂️ 
                ❌OCASIONASTE UN ACCIDENTE TERRIBLE❌`)
                break;
            case 2:
                alert (`
                                          👀¡CUIDADO!👀
⚠ No es una opción recomendable, puedes ocasionar un accidente ⚠
                `)
                break;
            case 3:
                alert (`
                                   😇¡BUENA ELECCIÓN!😇
✅Aumentaste la velocidad y continuaste en el momento adecuado✅`)
                break;
            default:
                alert ("La opción ingresada, no es valida.")
                    break;
        }
            break;
        default:
            alert ("La opción ingresada, no es valida.")
            break;
};



