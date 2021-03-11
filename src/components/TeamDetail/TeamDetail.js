import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faMars,
  faRunning,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import male from "../../Photo/male.png";
import female from "../../Photo/female.png";
import "./TeamDetail.css";

function TeamDetail() {
  const { id } = useParams();
  console.log(id);
  const [Details, setDetails] = useState([]);
  console.log(Details);
  const {
    strStadiumThumb,
    strFacebook,
    strTwitter,
    strInstagram,
    intFormedYear,
    strStadiumDescription,
    strTeamBadge,
    strSport,
    strTeam,
    strGender,
    strCountry,
  } = Details;
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data.teams[0]));
  }, [id]);
  return (
    <div>
      <div className="img-container">
        <img className="logo" src={strTeamBadge} alt=".." />
        <img className="thumbnail" src={strStadiumThumb} alt=".." />
      </div>
      <div className="container team-details">
        <div className="details">
          <h1>{strTeam}</h1>
          <p>
            <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
          </p>
          <p>
            <FontAwesomeIcon icon={faMars} /> Gender: {strGender}
          </p>
          <p>
            <FontAwesomeIcon icon={faRunning} /> Sport Type: {strSport}
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendarDay} /> Founded: {intFormedYear}
          </p>
        </div>
        <div className="team-img">
          {(strGender === "Male" && <img src={male} alt="..." />) || (
            <img src={female} alt="..." />
          )}
        </div>
      </div>
      <div className="container">
        <p>{strStadiumDescription}</p>
      </div>
      <div className="social-icons">
        <div>
          <a _blank href={`https://${strFacebook}`}>
            <i className="fab fa-facebook"></i>
          </a>
          <a _blank href={`https://${strInstagram}`}>
            <i class="fab fa-instagram"></i>
          </a>
          <a _blank href={`https://${strTwitter}`}>
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamDetail;
