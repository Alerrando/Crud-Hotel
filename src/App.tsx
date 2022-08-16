import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Table } from "./components/Table";
import { EditModal } from "./components/EditModal";
import { Modal } from "./components/modal";

export const inputs = {
  nome: "",
  email: "",
  telefone: "",
  endereco: "",
  dataNascimento: "",
};

export function App() {
  const [modal, setModal] = useState<boolean>(false);
  const [infos, setInfos] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [atualizar, setAtualizar] = useState({
    update: false,
    index: 0,
  });
  const [inputsModal, setInputsModal] = useState(inputs);
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setInputsModal({ ...inputsModal, [name]: value });
  };

  const filtro: any[] = infos.filter((info) =>
    Object.values(info.nome)
      .join("")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <Header modalDisplay={modalDisplay} />
      
      <main className="m-8">
        {modal ? (
          atualizar.update ? (
            <EditModal
              addInfos={addInfos}
              modal={modalDisplay}
              inputsModal={inputsModal}
              atualizar={atualizar}
              handleInputChange={handleInputChange}
            />
          ) : (
            <Modal
              addInfos={addInfos}
              modal={modalDisplay}
              inputsModal={inputsModal}
              handleInputChange={handleInputChange}
            />
          )
        ) : null}

        <Table
          search={search}
          infos={infos}
          editHospede={editHospede}
          deleteHospede={deleteHospede}
          filtro={filtro}
        />
      </main>

      <Footer setSearch={setSearch} />
    </>
  );

  function validarInputs(index: object) {
    let validar = 1;
    for (const [key, valor] of Object.entries(index)) {
      if (valor == "") validar = -1;
      else if (key == "telefone") {
        if (!/[0-9]/.test(valor)) if (!/\W|_/.test(valor)) validar = -1;
      }
    }

    return validar == -1
      ? alert("Preencha todos os campos corretamente!")
      : validar;
  }

  function modalDisplay(display: string) {
    if (display == "ativar") {
      setModal(true);
    } else {
      setModal(false);
      setAtualizar({ update: false, index: 0 });
    }
  }

  function addInfos() {
    if (atualizar.update == false) {
      if (validarInputs(inputsModal) > 0) {
        setInfos([...infos, inputsModal]);
        setModal(false);
        setInputsModal({
          nome: "",
          email: "",
          telefone: "",
          endereco: "",
          dataNascimento: "",
        });
      }
    } else {
      const atualizarHospede = infos.map((item, index) => {
        if (atualizar.index == index) {
          return inputsModal;
        }
        return item;
      });

      setInfos(atualizarHospede);
      setModal(false);
    }

    setAtualizar({ update: false, index: 0 });
  }

  function deleteHospede(index: number) {
    const arrayAux = [...infos];
    arrayAux.splice(index, 1);
    setInfos(arrayAux);
  }

  function editHospede(id: number) {
    setAtualizar({ update: true, index: id });

    setModal(true);
  }
}
