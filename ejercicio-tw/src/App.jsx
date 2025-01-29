import { EjercicioReactDom } from "./Components/EjercicioReactDom";
import { GridContainer } from "./Components/GridContainer";
import { TwitterFollowedCard } from "./Components/TwitterFollowedCard";
import "./StyleComponets/App.css";

export function App() {
    const format = (userName) => `@${userName}`;
    // const [isFollowing, setFollowing] = useState(false);
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