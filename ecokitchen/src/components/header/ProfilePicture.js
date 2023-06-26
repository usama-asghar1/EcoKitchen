import React, { useEffect, useState } from "react";
import "./ProfilePicture.css";
import { supabase } from "../supabase/supabaseClient";

function ProfilePicture() {
  const [profileName, setProfileName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await supabase.auth.getUser();
    const userEmail = response.data.user.email;
    let firstLetter = userEmail[0];
    firstLetter = firstLetter.toUpperCase();
    setProfileName(firstLetter);
  }

  return <div className="profile-picture">{profileName}</div>;
}

export default ProfilePicture;
