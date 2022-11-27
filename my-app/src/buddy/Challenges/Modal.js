import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect } from "react";
import DenseTable from "./UserTable";

const style = {

  width: 500,
  bgcolor: "background.paper",
  p: "10px 20px",
  borderRadius: 2,
  '&:focus': { outline: "none" },
  background: "linear-gradient(331deg, rgba(36,161,72,1) 0%, rgba(100,232,138,1) 56%, rgba(36,161,72,1) 100%)",
  display: 'flex',
  flexDirection: "column",
  alignItems: "center"
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

  useEffect(() => {
    props.data.users.forEach(item => {
      if (item.name === "Aivaras") {
        setJoined(true);
      }
    })
  }, [props]);

  const handleAddUser = () => {
    const newUser = {
      name: "Aivaras",
      surname: "Stanaitis",
      learnings: [
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
        <Box sx={{
          width: 510, position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          outline: 'none',
          height: "243px",
          display: "flex",
          justifyContent: "center",
          alignItems: 'center'
        }} className="gradient">
          <Box sx={style} onClick={props.handleClose}
            className="border-custom">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <button onMouseUp={handleCloseModal} className="close-btn"><CloseIcon /></button>
            <h3 className='modal-title'>{props.data.title}</h3>
            <div className='modal-date-duration'>
              <p>Start date: {props.data.startDate}</p>
              <p>Duration: {props.data.duration} Days</p>
            </div>
            <DenseTable users={props.data.users} inProgress={props.inProgress} />
            {calcStart() && <button onClick={handleAddUser} className={`btn ${joined && 'disabled'} ${effect && 'pulse'}`} disabled={joined}>Join</button>}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ReusableModal;