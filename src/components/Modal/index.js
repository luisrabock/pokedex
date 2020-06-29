import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField, Grid } from "@material-ui/core";

import allActions from "../../actions";

const Modal = ({ open = false, handleClose }) => {
  const dispatch = useDispatch();
  const { single } = useSelector((state) => state.data);
  const pokemonsArr = useSelector((state) => state.data);

  const [name, setName] = useState(single ? single.name : "");
  const [classification, setClassification] = useState(
    single ? single.classification : ""
  );
  const handleSubmit = () => {
    const newArr = pokemonsArr.data.map((el) => {
      if (el.name === single.name) {
        el.name = name;
        el.classification = classification;
      }

      return { ...el, el };
    });

    dispatch(allActions.dataActions.setData(newArr));
    dispatch(allActions.ModalActions.close());
  };
  useEffect(() => {
    setName(single ? single.name : "");
    setClassification(single ? single.classification : "");
  }, [single]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {`Atualizar dados do pokemon:${single ? single.name : ""}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Atualize dados do pokemon apenas no client side
          </DialogContentText>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                id="name"
                label="Nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item>
              <TextField
                id="classification"
                label="Classificação"
                onChange={(e) => setClassification(e.target.value)}
                value={classification}
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            variant="contained"
            size="small"
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            autoFocus
            onClick={() => handleSubmit()}
          >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
