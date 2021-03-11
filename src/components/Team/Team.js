import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from "react-router-dom"

function Team(props) {
    const { team, key } = props;
    const { idTeam, strTeamBadge, strTeam } = team;
    const history = useHistory();
    const handleExplore = (id) => history.push(`/explore/${id}`)
    return (
        <>
            <div className="shadow" style={{ borderRadius: "4px", border: '1px solid lightgray', width: "13rem", margin: "20px", padding: "10px", textAlign: "center" }}>
                <div style={{ width: "150px" }}>
                    <img src={strTeamBadge} style={{ width: "100%", margin: "20px" }} alt="..." />
                </div>
                <div class="card-body">
                    <p class="card-text">{strTeam}</p>
                    <button as={Link} onClick={() => handleExplore(idTeam)} className="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </>
    )
}

export default Team
