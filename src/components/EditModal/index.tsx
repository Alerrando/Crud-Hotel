import { X } from "phosphor-react";
import { inputs } from "../../App";

type EditModalProps = {
  addInfos: () => void;
  modal: (atualizar: string) => void;
  inputsModal: typeof inputs;
  atualizar: any;
  handleInputChange: (e: any) => void;
};

export function EditModal(props: EditModalProps) {
  const modalInput = props.inputsModal;

  return (
    <div className="w-screen h-screen fixed flex top-0 left-0 z-50 items-center justify-center bg-modal">
      <section className="w-[65%] h-[65%] bg-white">
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
                Nome: {" "}
              </label>
              <input
                className="w-full outline-none border-b-[3px] border-b-gray-500 my-3"
                type="text"
                name="nome"
                value={modalInput.nome}
                required
                onChange={(e) => {
                  props.handleInputChange(e)
                }}
              />

              <label className="text-xl" htmlFor="email">
                Email:{" "}
              </label>
              <input
                className="w-full outline-none border-b-[3px] border-b-gray-500 my-3"
                type="email"
                name="email"
                value={modalInput.email}
                onChange={(e) => {
                  props.handleInputChange(e)
                }}
                required
              />

              <label className="text-xl" htmlFor="telefone">
                Telefone:{" "}
              </label>
              <input
                className="w-full outline-none border-b-[3px] border-b-gray-500 my-3"
                type="tel"
                name="telefone"
                id="tel"
                value={modalInput.telefone}
                onChange={(e) => {
                  props.handleInputChange(e)
                }}
                required
              />

              <label className="text-xl" htmlFor="endereco">
                Endereço:{" "}
              </label>
              <input
                className="w-full outline-none border-b-[3px] border-b-gray-500 my-3"
                type="text"
                name="endereco"
                value={modalInput.endereco}
                onChange={(e) => {
                  props.handleInputChange(e)
                }}
                required
              />

              <label className="w-1/5 text-xl" htmlFor="dataNascimento">
                Data de Nascimento:{" "}
              </label>
              <input
                type="date"
                name="dataNascimento"
                value={modalInput.dataNascimento}
                required
                onChange={(e) => {
                  props.handleInputChange(e)
                }}
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