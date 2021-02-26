import React, { useContext, useState } from "react";
import nikolector from "../../img/nikolector.jpg";
import { Context } from "../store/appContext";

const ListTeams = () => {

    const { store, actions } = useContext(Context);
    
    return (
        <div className="container">
            <h3>Your added teams:</h3>
            <ul>
                {store.teams.map((team, index) => {
                    return(
                        <li key={team.id}>
                           {team.name}
                        </li>
                    )}
                )}
            </ul>
        </div>
    )
}
export default ListTeams;
