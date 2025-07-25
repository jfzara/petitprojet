/*Crée un composant React qui gère trois fonctionnalités de toggle avec useState :

Afficher/Masquer un texte ("Hello World").

Un bouton Toggle Text qui affiche ou cache le texte.

Changer la couleur du fond entre blanc et noir.

Un bouton Toggle Background.

Changer le thème entre "light" et "dark".

Affiche le thème actuel dans un <p> et change la couleur du texte selon le thème.

Contraintes :

Tout doit être dans un seul composant.

Utilise 3 états différents avec useState.

Aucune librairie externe.

Applique la logique React (ne mute jamais directement l’état). */
import { useState } from "react";
function Composant(){
    const [isVisible, setIsVisible] = useState(false);
    return(
        

<>
<section className="composant_toggle">
{isVisible && <p>Hello World</p>}
<button onClick= {() => setIsVisible(!isVisible)}>Toggle Text</button>
<button>Toggle Background</button>
<p>Light</p>
</section>
</>
    );
}
export default Composant;