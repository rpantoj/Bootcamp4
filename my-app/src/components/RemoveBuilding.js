import React, {Component} from "react";

class RemoveBuilding extends Component {

    remove(id, e) {
        this.props.removeBuilding(id);
    }

    render() {
        return (
            <button type="submit" onClick={(e) => {
                this.remove(this.props.selectedBuilding, e)
            }}>Delete This Building</button>
        )
    }
}

export default RemoveBuilding;