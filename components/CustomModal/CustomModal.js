import React from "react";
import Modal from "react-modal";

const CustomModal = ({modalIsOpen, setIsOpen}) => {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          borderRadius: "8px",
          bottom: 'auto',
          border: "1px solid #F2F2F2",
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 100
          },
      };
      
        function openModal() {
          setIsOpen(true);
        }
      
        function afterOpenModal() {
          // references are now sync'd and can be accessed.
        }
      
        function closeModal() {
          setIsOpen(false);
        }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p onClick={closeModal} className="flex justify-end cursor-pointer">✕</p>
        <h1 className="text-center text-2xl font-semibold pt-11 px-28">Are Your Confirm Change Shipped</h1>
        <div className={` flex justify-center items-center mt-8 mb-[90px]`}>
            <button type="">
              <label onClick={closeModal}
                className="bg-[#ffffff] px-10 py-[10px] text-sm rounded-lg  cursor-pointer text-[#686868] mr-2 border border-[#686868]"
              >
                Cancel
              </label>
            </button>
            <button type="">
              <label  onClick={closeModal}
                className="bg-[#FB641B] ml-2 hover:bg-[#fc5907] px-10 py-[10px] rounded-lg  cursor-pointer text-white text-sm"
              >
                Conform
              </label>
            </button>
          </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
