import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

export default function AddCabin() {
  const [isOpenModel, setIsOpenModel] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpenModel((show) => !show)}>
        Add New Cabin
      </Button>
      {isOpenModel && (
        <Modal onClose={() => setIsOpenModel(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModel(false)} />
        </Modal>
      )}
    </>
  );
}
