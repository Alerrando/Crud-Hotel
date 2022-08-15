import { useEffect, useState } from "react";
import { Pencil, PlusCircle, Trash } from "phosphor-react";
import { Modal } from "./components/modal";
import { EditModal } from "./components/modal/EditModal";

export const inputs = {
  nome: "",
  email: "",
  telefone: "",
  endereco: "",
  dataNascimento: "",
};

export function App() {
  const [modal, setModal] = useState<boolean>(false);
  const [atualizar, setAtualizar] = useState({
    update: false,
    index: 0,
  });
  const [infos, setInfos] = useState<any[]>([]);
  const [inputsModal, setInputsModal] = useState(inputs);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setInputsModal({ ...inputsModal, [name]: value });
  };

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

  return (
    <>
      <header className="w-full h-20 bg-[#364A54] flex items-center">
        <div className="w-full py-2 px-12 flex justify-between">
          <h1 className="text-3xl text-white">Cadastro de Hóspedes</h1>
          <button
            className="flex items-center gap-2 text-white bg-green-600 px-3"
            onClick={() => modalDisplay("ativar")}
          >
            <PlusCircle size={26} weight="bold" />
            Adicionar novo hóspede
          </button>
        </div>
      </header>

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

        <table className="w-full border-collapse">
          <thead className="bg-zinc-400 text-xl">
            <th className="p-1 text-start">Id</th>
            <th className="p-1 text-start">Nome</th>
            <th className="p-1 text-start">Email</th>
            <th className="p-1 text-start">Telefone</th>
            <th className="p-1 text-start">Endereço</th>
            <th className="p-1 text-start">Data de Nascimento</th>
            <th className="p-1 text-start">Editar</th>
            <th className="p-1 text-start">Excluir</th>
          </thead>
          <tbody>
            {infos.map((hospede, index) => (
              <tr className="border-b-2" key={index}>
                <td className="max-h-14 p-[6px]">{index + 1}</td>
                <td className="max-h-14 p-[6px]">{hospede.nome}</td>
                <td className="max-h-14 p-[6px]">{hospede.email}</td>
                <td className="max-h-14 p-[6px]">{hospede.telefone}</td>
                <td className="max-h-14 p-[6px]">{hospede.endereco}</td>
                <td className="max-h-14 p-[6px]">{hospede.dataNascimento}</td>
                <td className="max-h-14 p-[6px]">
                  <Pencil
                    size={32}
                    weight="bold"
                    className="cursor-pointer"
                    onClick={(e) => editHospede(index)}
                  />
                </td>
                <td className="max-h-14 p-[6px]">
                  <Trash
                    size={32}
                    weight="bold"
                    className="cursor-pointer"
                    onClick={(e) => deleteHospede(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer className="w-full h-12 bg-[#364A54] m-auto bottom-0 fixed">
        <div className="flex items-center justify-between px-12 py-3">
          <div>
            <label className="text-white pr-4">Ordenar por: </label>
            <select>
              <option value="padrao" selected>
                Padrão
              </option>
              <option value="nome">Nome</option>
              <option value="email">E-mail</option>
            </select>
          </div>
          <div className="flex items-center text-white gap-2">
            <button className="mr-2">Anterior</button>
            <button className="w-8 h-7 flex text-center justify-center ativo">
              1
            </button>
            <button className="w-8 h-7 flex text-center justify-center ">
              2
            </button>
            <button className="w-8 h-7 flex text-center justify-center ">
              3
            </button>
            <button className="w-8 h-7 flex text-center justify-center ">
              4
            </button>
            <button className="ml-2">Proximo</button>
          </div>
        </div>
      </footer>
    </>
  );
}
