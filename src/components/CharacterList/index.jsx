import { Component } from "react";
import Character from "../Character";

class CharacterList extends Component {
    render() {
        const { list } = this.props;
        return(
            <>
            <h3 style={{color:'yellow'}}>Rick and Morty Characters</h3>
            {
                list.map((char) => (
                    <Character key ={char.id} char={char} />
                ))
            }
            </>
        )
    }
}

export default CharacterList;