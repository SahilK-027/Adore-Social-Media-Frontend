// EditProfile.tsx
import { FC, useEffect, useRef } from "react";
import "./EditProfile.scss";

interface EditProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditProfile: FC<EditProfileProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log(event.target as Node);
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
  
    if (isOpen) {
      // Attach click event listener when the modal is open
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Clean up the event listener when the modal is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }
  
    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="edit-profile-modal">
          <div className="modal-content" ref={modalRef}>
            <div
              className="head-edit-profile"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <h1 style={{ fontSize: 20, color: "black", fontWeight: 700 }}>
                Edit Your Profile
              </h1>
              <p style={{ cursor: "pointer" }}>
                <i className="fa-solid fa-xmark" onClick={onClose}></i>
              </p>
            </div>
            <form>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter new username"
              />

              <label htmlFor="email">Primary Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter new primary mail"
              />

              <label htmlFor="bio">Bio:</label>
              <textarea
                id="bio"
                name="bio"
                placeholder="Write something about yourself"
              />

              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Where are you...?"
              />

              <button type="submit" className="save-profile-changes-btn">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
