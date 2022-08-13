import { X } from "phosphor-react";
import { inputsModal } from "../../App";

type ModalProps = {
  addInfos: () => void;
  modal: (atualizar: string) => void;
  inputsModal: inputsModal;
};

export function Modal(props: ModalProps) {
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
                Nome:{" "}
              </label>
              <input
                className="w-full outline-none border-b-[3px] border-b-gray-500 my-3"
                type="text"
                name="nome"
                required
                onChange={(e) =>
                  (modalInput.nome = (e.target as HTMLInputElement).value)
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
                  (modalInput.email = (e.target as HTMLInputElement).value)
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
                  (modalInput.telefone = (e.target as HTMLInputElement).value)
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
                  (modalInput.endereco = (e.target as HTMLInputElement).value)
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
                  (modalInput.calendario = (e.target as HTMLInputElement).value)
                }
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
