import { MdPerson3 } from "react-icons/md";
import { PiNotePencilLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import "../css/TopBar.css";

function TopBar() {
  const navigate = useNavigate();
  return (
    <div className="topbar">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <div className="circle">
          <MdPerson3 className="person-icon" />
        </div>
        <span className="fullname">Hi, User Name</span>
      </div>
      <div className="add-note" onClick={() => navigate("/add-note")}>
        <PiNotePencilLight className="pencil-icon" id="pencil-icon" />
      </div>
    </div>
  );
}

export default TopBar;
