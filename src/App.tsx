import { useState } from "react";
import { Pencil, PlusCircle, Trash, X } from "phosphor-react";

export function App() {
  const [modal, setModal] = useState<boolean>(false);
  const [inputNome, setInputNome] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputTelefone, setInputTelefone] = useState<string>("");
  const [inputEndereco, setInputEndereco] = useState<string>("");
  const [inputCalendario, setInputCalendario] = useState<string>("");
  const [infos, setInfos] = useState<any[]>([]);

  function modalDisplay(display: string) {
    if (display == "ativar") {
      setModal(true);
    } else setModal(false);
  }

  function addInputEndereco(value: string) {
    setInputEndereco(value);
  }

  function addInfos() {
    const infosHospede = {
      nome: inputNome,
      enail: inputEmail,
      telefone: inputTelefone,
      endereco: inputEndereco,
      calendario: inputCalendario,
    };

    setInfos([...infos, infosHospede]);
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
          <div className="w-screen h-screen fixed flex top-0 left-0 z-50 items-center justify-center bg-modal">
            <section className="w-[65%] h-[65%] bg-white">
              <header className="w-full h-12 flex items-center justify-end">
                <div className="mr-4">
                  <X
                    className="cursor-pointer"
                    onClick={() => modalDisplay("desativar")}
                    size={32}
                    weight="bold"
                  />
                </div>
              </header>

              <main className="w-full h-full">
                <div className="mx-8 my-2">
                  <form>
                    <label className="text-xl" htmlFor="nome">
                      Nome:{" "}
                    </label>
                    <input
                      className="w-full outline-none border-b-[3px] border-b-gray-500 my-3"
                      type="text"
                      name="nome"
                      required
                      onChange={(e) =>
                        setInputNome((e.target as HTMLInputElement).value)
                      }
                    />

                    <label className="text-xl" htmlFor="email">
                      Email:{" "}
                    </label>
                    <input
                      className="w-full outline-none border-b-[3px] border-b-gray-500 my-3"
                      type="email"
                      name="email"
                      onChange={(e) =>
                        setInputEmail((e.target as HTMLInputElement).value)
                      }
                      required
                    />

                    <label className="text-xl" htmlFor="telefone">
                      Telefone:{" "}
                    </label>
                    <input
                      className="w-full outline-none border-b-[3px] border-b-gray-500 my-3"
                      type="tel"
                      pattern="(?=.*\d)(?=.*[0-9]).{4} [0-9]{5}-[0-9]{4}"
                      placeholder="(00) 12345-6789"
                      name="telefone"
                      id="tel"
                      onChange={(e) =>
                        setInputTelefone((e.target as HTMLInputElement).value)
                      }
                      required
                    />

                    <label className="text-xl" htmlFor="endereco">
                      Endereço:{" "}
                    </label>
                    <input
                      className="w-full outline-none border-b-[3px] border-b-gray-500 my-3"
                      type="text"
                      name="endereco"
                      onChange={(e) =>
                        setInputEndereco((e.target as HTMLInputElement).value)
                      }
                      required
                    />

                    <label className="w-1/5 text-xl" htmlFor="dataNascimento">
                      Data de Nascimento:{" "}
                    </label>
                    <input
                      type="date"
                      name="dataNascimento"
                      required
                      onChange={(e) =>
                        setInputCalendario((e.target as HTMLInputElement).value)
                      }
                    />

                    <div className="flex items-center justify-end">
                      <div
                        className="w-20 h-8 flex items-center justify-center cursor-pointer bg-blue-700 text-white hover:bg-blue-900 transition-colors"
                        onClick={addInfos}
                      >
                        Enviar
                      </div>
                    </div>
                  </form>
                </div>
              </main>
            </section>
          </div>
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
            <tr className="border-b-2">
              <td className="max-h-14 p-[6px] ver">1</td>
              <td className="max-h-14 p-[6px] ver">Alerrando</td>
              <td className="max-h-14 p-[6px] ver">alerrando2@gmail.com</td>
              <td className="max-h-14 p-[6px] ver">(18)99823-3887</td>
              <td className="max-h-14 p-[6px] ver">Rancharia</td>
              <td className="max-h-14 p-[6px] ver">16/10/2002</td>
              <td className="max-h-14 p-[6px] ver">
                <Pencil size={32} weight="bold" />
              </td>
              <td className="max-h-14 p-[6px] ver">
                <Trash size={32} weight="bold" />
              </td>
            </tr>
            <tr className="border-b-2">
              <td className="max-h-14 p-[6px] ver">2</td>
              <td className="max-h-14 p-[6px] ver">Andressa</td>
              <td className="max-h-14 p-[6px] ver">andressaSouza@gmail.com</td>
              <td className="max-h-14 p-[6px] ver">(18)99881-5716</td>
              <td className="max-h-14 p-[6px] ver">Arthur Nogueira</td>
              <td className="max-h-14 p-[6px] ver">17/11/2002</td>
              <td className="max-h-14 p-[6px] ver">
                <Pencil size={32} weight="bold" />
              </td>
              <td className="max-h-14 p-[6px] ver">
                <Trash size={32} weight="bold" />
              </td>
            </tr>
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
