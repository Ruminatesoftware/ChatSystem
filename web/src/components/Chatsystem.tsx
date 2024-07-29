import React, { useState, KeyboardEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Scrollbars } from "react-custom-scrollbars";

import "./Chatsystem.css";
import Notification from "./Notification";

interface SearcharrayType {
  id: number;
  name: string;
  title: string;
}

const Chatsystem = () => {
  const [textvalue, setTextValue] = useState("");
  const [showmsg, setShowMsg] = useState(false);
  const [filteredResults, setFilteredResults] = useState<SearcharrayType[]>([]);
  const [msgResults, setMsgResults] = useState<string[]>([]);
  // Sample Data
  const dataSource = [
    {
      id: 1,
      name: "/whatsapp",
      title: "whatsapp",
      description: "This is whatsapp",
    },
    {
      id: 2,
      name: "/instagram",
      title: "instagram",
      description: "This is Instagram",
    },
    {
      id: 3,
      name: "/linkedin",
      title: "linkedin",
      description: "This is linkedin",
    },
    {
      id: 4,
      name: "/twitter",
      title: "twitter",
      description: "This is Twitter",
    },
    {
      id: 5,
      name: "/youtube",
      title: "youtube",
      description: "This is Youtube",
    },
    {
      id: 6,
      name: "/facebook",
      title: "facebook",
      description: "This is facebook",
    },
    // { id: 7, name: "/savecomponents", title: "savecomponents" },
    // { id: 8, name: "/saveweapon", title: "saveweapon" },
    // { id: 9, name: "/submenu1", title: "submenu1" },
    // { id: 10, name: "/submenu2", title: "submenu2" },
    // { id: 11, name: "/tools", title: "tools" },
    // { id: 12, name: "/tech", title: "tech" },
    // { id: 13, name: "/save", title: "save" },
    // { id: 14, name: "/parts", title: "parts" },
    // { id: 15, name: "/gaming", title: "gaming" },
    // { id: 16, name: "/facebook", title: "facebook" },
    // { id: 17, name: "/google", title: "google" },
  ];

  const handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTextValue(e.currentTarget.value);
    if (e.currentTarget.value === "") return true;
    const filtered = dataSource.filter(
      (suggestion) =>
        suggestion.name
          .toLowerCase()
          .indexOf(e.currentTarget.value.toLowerCase()) > -1
    );

    setFilteredResults(filtered);
  };

  const handleKeyboardEvent = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key == "Enter") {
      setShowMsg(true);
      setMsgResults([...msgResults, textvalue]);
      setTextValue("");
      setFilteredResults([]);
    }
  };

  return (
    <>
      <div className="messages-main-wrap">
        <div className="messages-main-block">
          {/* <Scrollbars style={{ width: 1000, height: 300 }}> */}
          {showmsg && (
            <ul className="messages-list">
              {msgResults.map((msg) => {
                return (
                  <li>
                    <Notification
                      type={msg}
                      title="Romario Richardson [692]"
                      description={
                        "Hey wie gehts? Are you fine? Me too,good luck whores"
                      }
                      icon={""}
                    />
                  </li>
                );
              })}
            </ul>
          )}
          {/* </Scrollbars> */}

          <div className="messages-text-block">
            <input
              type="text"
              placeholder="Leave your message..."
              value={textvalue}
              onChange={handleTextChange}
              onKeyDown={handleKeyboardEvent}
            />
            <ul className="messages-sugest">
              {filteredResults.map((suggestion, index) => {
                return <li>{suggestion.name}</li>;
              })}
            </ul>
            <FontAwesomeIcon icon={faCaretRight} style={{ color: "#0a8ce9" }} />
            <ul className="options">
              <li className="active">RP</li>
              <li>FAMILY</li>
              <li>WORK</li>
              <li>GOW</li>
              <li>WALKIE-TALKIE</li>
            </ul>
          </div>
        </div>
        {/* <div className="messages-bg">
          <img src={"/images/messages-bg2.jpg"} />
        </div> */}
      </div>
    </>
  );
};

export default Chatsystem;
