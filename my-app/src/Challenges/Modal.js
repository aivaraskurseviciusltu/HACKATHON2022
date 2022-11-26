import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import DenseTable from "./UserTable";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "5px solid #2196f3",
  p: "10px 20px",
  borderRadius: 6,
  '&:focus': { outline: "none"}
};



const ReusableModal = (props) => {
  const [joined, setJoined] = React.useState(false);
  const [effect, setEffect] = React.useState(false);

  const calcStart = () => {
    const startDate = new Date(props.data.startDate).getTime();
    const today = new Date().getTime();

    return startDate > today;
  }

  const handleCloseModal = () => {
    props.closeModal();
  }

  const handleAddUser = () => {
    const newUser = {
      name: "Kim",
      surname: "Jones",
      learnings: [
        {
          title: "Learning Typescript",
          duration: 2,
          startDate: "2022-11-20",
          endDate: "2022-11-25",
        },
      ],
    }
    props.onAddUser(newUser);
    setEffect(true);
    setJoined(true);
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <Box sx={style} onClick={props.handleClose} >
          <button onMouseUp={handleCloseModal} className="close-btn"><CloseIcon /></button>
          <h3 className='modal-title'>{props.data.title}</h3>
          <div className='modal-date-duration'>
            <p>Start date: {props.data.startDate}</p>
            <p>Duration: {props.data.duration}</p>
          </div>
          <DenseTable users={props.data.users} />
          {calcStart() && <button onClick={handleAddUser} className={`btn ${joined && 'disabled'} ${effect && 'pulse'}`} disabled={joined}>Join</button>}
        </Box>
      </Fade>
    </Modal>
  );
};

export default ReusableModal;