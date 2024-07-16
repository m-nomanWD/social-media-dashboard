import React from "react";
import iconUp from "/images/icon-up.svg";
import iconDown from "/images/icon-down.svg";

export default function ProfileCard({ profile }) {
 const { username, followersLabel, followersCount, icon, today, status, plateform } =
  profile;
 return (
  <div className={plateform == 'youtube' ? "profile-card border-social_youtube rounded-md" : "profile-card " && plateform == 'insta' ? 'profile-card before:h-[4px] before:w-full before:bg-social_instagram before:absolute relative before:-top-[0px] rounded-md overflow-hidden border-none ' : 'profile-card '}>
   <div className="flex ">
    <img src={icon} alt="plateform" />
    <span className="font-semibold text-neutral_light_dark_grayish_blue_text ml-2 dark:text-neutral_light_dark_grayish_blue_text">
     {username}
    </span>
   </div>
   <div className="my-6 flex justify-center flex-col text-center">
    <h1 className="text-5xl font-bold   ">{followersCount}</h1>
    <p className="uppercase tracking-[1.5px] text-neutral_light_dark_grayish_blue_text">
     {followersLabel}
    </p>
   </div>
   <div className="flex items-center">
    <img src={status ? iconUp : iconDown} alt="" className="mr-1" />
    <b
     className={
      status ? "text-general_lime_green" : "text-general_bright_red"
     }
    >
     {today}
    </b>
   </div>
  </div>
 );
}
