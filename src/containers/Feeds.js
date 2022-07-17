import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FeedsView from "views/Feeds";

function Feeds() {
  const [hasUserData, sethasUserData] = useState(false);
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.auth);
  useEffect(() => {
    if (userData.email) {
      sethasUserData(true);
    } else {
      navigate("/app/auth", { replace: true });
    }
  }, [userData]);

  return hasUserData ? <FeedsView name={userData.text ? userData.text : userData.email} /> : null;
}

export default Feeds;
