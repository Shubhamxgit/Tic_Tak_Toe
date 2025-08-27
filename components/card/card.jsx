import Icon from "../icon/icon";
import "./card.css"

function Card({onPlay, index, player}){
    let icon = <Icon/>
    if (player === "X"){
        icon = <Icon name={"cross"}/>
    }else if(player === "O"){
        icon = <Icon name={"circle"}/>
    }
    return(
        <div className="card" onClick={()=> onPlay(index)}>
            {icon}
        </div>
    );
}
export default Card;