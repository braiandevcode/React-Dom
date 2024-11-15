import { ListFollow } from "./ListFollow";

export function TwitterFollowedCard(){
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
            userName: "CFKArgentina",
            name: "Cristina Kirchner"
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
        <article className="tw-followed-article">
            <h2 className="tw-followed-article__title">A quién seguir</h2>
            <div className="divisor"></div>
            <ul className="tw-followed-list d-flex f-col g-1 jc-center">
                {users.map(({ userName, name}, i)=>{
                   return <ListFollow key={i} userName={userName} name={name}/>
                })}
            </ul>
        </article>
    )
}
