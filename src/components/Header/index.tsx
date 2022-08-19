import { PlusCircle } from "phosphor-react";

type HeaderProps = {
    modalDisplay: (display: string) => void
}

export function Header({ modalDisplay }: HeaderProps) {
  

  return (
    <header className="w-full h-20 bg-[#364A54] flex">
      <div className="w-full py-2 px-2 md:px-12 flex justify-between items-center">
        <h1 className="text-sm md:text-3xl text-white">Cadastro de Hóspedes</h1>
        <button
          className="flex items-center text-sm md:text-2xl gap-1 md:gap-2 text-white py-1 bg-green-600 px-2"
          onClick={() => modalDisplay("ativar")}
        >
          <PlusCircle className="w-6 h-6" weight="bold" />
          Adicionar novo hóspede
        </button>
      </div>
    </header>
  );

}
