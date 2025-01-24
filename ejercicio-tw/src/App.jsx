import { EjercicioReactDom } from "./Components/EjercicioReactDom";
import { GridContainer } from "./Components/GridContainer";
import { TwitterFollowedCard } from "./Components/TwitterFollowedCard";
import "./StyleComponets/App.css"
// export function App() {
//     const format= (userName) => `@${userName}`;
//     return (
//         <>
//             <div className="GridCards">
//                 <TwitterFollowedCard formatUserName={format} />
//                 <TwitterFollowedCard formatUserName={format} />
//                 <TwitterFollowedCard formatUserName={format} />
//                 <TwitterFollowedCard formatUserName={format} />
//             </div>
//         </>
//     )
// }

// EJEMPLO DE CHILDREN: Children puede ser un texto, un elemento o varios o un componente, children no se utiliza como atributo.

export function App() {
    const format = (userName) => `@${userName}`;
    return (
        <>
            <EjercicioReactDom>
                <h1>Practica React Dom</h1>
                <GridContainer>
                    <TwitterFollowedCard formatUserName={format} />
                    <TwitterFollowedCard formatUserName={format} />
                    <TwitterFollowedCard formatUserName={format} />
                    <TwitterFollowedCard formatUserName={format} />
                </GridContainer>
            </EjercicioReactDom>
        </>
    )
}