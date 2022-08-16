import { X } from "phosphor-react";
import { inputs } from "../../App";

type EditModalProps = {
  addInfos: () => void;
  modal: (atualizar: string) => void;
  infos: any[]
  inputsModal: typeof inputs;
  atualizar: any;
  handleInputChange: (e: any) => void;
};

export function EditModal(props: EditModalProps) {
  let infos = props.inputsModal;

  return (
    <div className="w-screen h-screen fixed flex top-0 left-0 z-50 items-center justify-center bg-modal">
      <section className="w-[80%] h-[77%] bg-white">
        <header className="w-full h-12 flex items-center justify-end">
          <div className="mr-4">
            <X
              className="cursor-pointer"
              onClick={() => props.modal("desativar")}
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
                id="nome"
                value={infos.nome}
                onChange={props.handleInputChange}
              />

              <label className="text-xl" htmlFor="email">
                Email:{" "}
              </label>
              <input
                className="w-full outline-none border-b-[3px] border-b-gray-500 my-3"
                type="email"
                name="email"
                id="email"
                value={infos.email}
                onChange={props.handleInputChange}
              />

              <label className="text-xl" htmlFor="telefone">
                Telefone:{" "}
              </label>
              <input
                className="w-full outline-none border-b-[3px] border-b-gray-500 my-3"
                type="tel"
                name="telefone"
                min={12}
                id="tel"
                value={infos.telefone}
                onChange={props.handleInputChange}
              />

              <label className="text-xl" htmlFor="endereco">
                Endereço:{" "}
              </label>
              <input
                className="w-full outline-none border-b-[3px] border-b-gray-500 my-3"
                type="text"
                name="endereco"
                id="telefone"
                value={infos.endereco}
                onChange={props.handleInputChange}
              />

              <label className="w-1/5 text-xl" htmlFor="dataNascimento">
                Data de Nascimento:{" "}
              </label>
              <input
                type="date"
                name="dataNascimento"
                value={infos.dataNascimento}
                onChange={props.handleInputChange}
              />

              <div className="flex items-center justify-end">
                <div
                  className="w-20 h-8 flex items-center justify-center cursor-pointer bg-blue-700 text-white hover:bg-blue-900 transition-colors"
                  onClick={props.addInfos}
                >
                  Enviar
                </div>
              </div>
            </form>
          </div>
        </main>
      </section>
    </div>
  );
}
