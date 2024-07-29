import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareTwitter,
  faSquareInstagram,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

interface Messageparameter {
  type: string;
  title: string;
  description: string;
  icon: string;
}

const Notification = ({ type, title, description, icon }: Messageparameter) => {
  const today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();
  switch (type) {
    case "/facebook":
      return (
        <div className="message-block">
          <div className="icon-wrapper1">
            <p>ME</p>
          </div>
          <div className="sender-wrapper">
            <p>Romario Richardson [692]</p>
          </div>
          <div className="description-wrapper">
            <p>Hey wie gehts? Are you fine? </p>
          </div>
        </div>
      );
    case "/twitter":
      return (
        <div className="message-block">
          <div className="icon-wrapper2">
            <p>DO</p>
          </div>
          <div className="sender-wrapper">
            <p>Romario Richardson [692]</p>
          </div>
          <div className="description-wrapper">
            <p>Hey wie gehts? Are you fine? </p>
          </div>
        </div>
      );
    case "/instagram":
      return (
        <div className="message-block">
          <div className="icon-wrapper2">
            <p>DO</p>
          </div>
          <div className="sender-wrapper">
            <p>Romario Richardson [692]</p>
          </div>
          <div className="description-wrapper">
            <p>Hey wie gehts? Are you fine? </p>
          </div>
        </div>
      );
    case "/whatsapp":
      return (
        <div className="message-block">
          <div className="icon-wrapper">
            <p>RP</p>
          </div>
          <div className="sender-wrapper">
            <p>Romario Richardson [692]</p>
          </div>
          <div className="description-wrapper">
            <p>Hey wie gehts? Are you fine? Me too,good luck whores</p>
          </div>
        </div>
      );

    default:
      return (
        <div className="message-block">
          <div className="icon-wrapper">
            <p>RP</p>
          </div>
          <div className="sender-wrapper">
            <p>Romario Richardson [692]</p>
          </div>
          <div className="description-wrapper">
            <p>Hey wie gehts? Are you fine? Me too,good luck whores</p>
          </div>
        </div>
      );
  }
};
export default Notification;
