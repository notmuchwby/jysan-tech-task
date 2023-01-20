import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './Modal.module.css'

const style = {
  position: 'absolute',
  marginTop: 50,
  marginLeft: 24,
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: '#FF7253',
  borderRadius: 2,
  fontWeight: 700,
  boxShadow: 24,
  color: '#ffffff',
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className={styles.buttonContainer}>
        <Button className={styles.button} onClick={handleOpen}><p className={styles.buy}>купить</p>&nbsp;<p className={styles.pie}> пай</p></Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className={styles.box} id="modal-modal-title" variant="h6" component="h2">
            Спасибо!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}