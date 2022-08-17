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
  const [auxInputsModal, setAuxInputsModal] = useState(inputs);
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setInputsModal({ ...inputsModal, [name]: value });
    setAuxInputsModal({ ...auxInputsModal, [name]: value });
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
              infos={infos}
              inputsModal={auxInputsModal}
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
    let validar = 1,
      emBranco = "";
    for (const [key, valor] of Object.entries(index)) {
      if (valor == "") {
        validar = -1;
        key == "endereco"
          ? (emBranco += "endereço, ")
          : key == "dataNascimento" ? (emBranco += "Data de Nascimento, ")
          : (emBranco += `${key}, `);
      } else if (key == "telefone") {
        if (!/[0-9]/.test(valor)) validar = -1;
        else if (valor.length < 12) validar = -1;
      }
    }

    return validar == -1
      ? alert(`Preencha os campos: ${emBranco} corretamente!`)
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
          return auxInputsModal;
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

  function editHospede(id: number, nomeHospede: string) {
    if (search.length == 0) {
      setAtualizar({ update: true, index: id });
      setAuxInputsModal(infos[id]);
      setModal(true);
    } else {
      infos.map((item, index) => {
        if (item.nome == nomeHospede) {
          setAtualizar({ update: true, index: index });
          setAuxInputsModal(infos[index]);
          setModal(true);
        }
      });
    }
  }
}
