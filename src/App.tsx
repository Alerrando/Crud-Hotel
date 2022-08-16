import { useEffect, useState } from "react";
import { MagnifyingGlass, Pencil, PlusCircle, Trash } from "phosphor-react";
import { Modal } from "./components/modal";
import { EditModal } from "./components/EditModal";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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
  const [search, setSearch] = useState("")

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setInputsModal({ ...inputsModal, [name]: value });
  };

  const filtro:any[] = infos.filter(info => Object.values(info.nome).join('').toLowerCase().includes(search.toLowerCase()))

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
            {search.length == 0 ?
                (infos.map((hospede, index) => (
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
                  </tr>))
                ) :
              (filtro.map((hospede:typeof inputs, index:number) => (
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
                ))
              )
            }
          </tbody>
        </table>
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
