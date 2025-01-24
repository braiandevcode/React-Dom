import { ListFollow } from "./ListFollow";
import PropTypes from "prop-types";

export function TwitterFollowedCard({ formatUserName }){
    // arreglo de usuarios
    const users = [
        {
            userName: "BraianP333000",
            name: "Braian Palacios"
        },
        {
            userName: "Jmilei",
            name: "Javier Milei"
        },
        {
            userName: "MrBeast",
            name: "MrBeast"
        },
        {
            userName: "Madorni",
            name: "Manuel Adorni"
        },
        {
            userName: "PatoBullrich",
            name: "Patricia Bulrich"
        }
    ]

    return(
        <article className="tw-followed-article d-flex f-col jc-center">
            <h2 className="tw-followed-article__title">A quién seguir</h2>
            <div className="divisor"></div>
            <ul className="tw-followed-list d-flex f-col g-1 ai-center">
                {users.map(({ userName, name}, i)=>{
                   return <ListFollow key={i} userName={userName} name={name} formatUserName={formatUserName}/>
                })}
            </ul>
        </article>
    )
}

TwitterFollowedCard.propTypes = {
    formatUserName: PropTypes.func.isRequired,
}