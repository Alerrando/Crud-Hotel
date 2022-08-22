import { Pencil, Trash } from "phosphor-react";
import { inputs } from "../../App";

type TableProps = {
  search: string;
  infos: any[];
  editHospede: (id: number, nomeHospede: string) => void;
  deleteHospede: (index: number) => void;
};

export function Table(props: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-zinc-400 text-[0.6rem] md:text-xl">
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
          {props.infos.map((hospede, index) => (
                <tr className="border-b-2 text-[0.6rem] md:text-base" key={index}>
                  <td className="max-h-14 p-[6px]">{index + 1}</td>
                  <td className="max-h-14 p-[6px]">{hospede.nome}</td>
                  <td className="max-h-14 p-[6px]">{hospede.email}</td>
                  <td className="max-h-14 p-[6px]">{hospede.telefone}</td>
                  <td className="max-h-14 p-[6px]">{hospede.endereco}</td>
                  <td className="max-h-14 p-[6px]">{hospede.dataNascimento}</td>
                  <td className="max-h-14 p-[6px]">
                    <Pencil
                      weight="bold"
                      className="cursor-pointer w-6 h-6 md:w-8 md:h-8"
                      onClick={(e) => props.editHospede(index, hospede.nome)}
                    />
                  </td>
                  <td className="max-h-14 p-[6px]">
                    <Trash
                      weight="bold"
                      className="cursor-pointer w-6 h-6 md:w-8 md:h-8"
                      onClick={(e) => props.deleteHospede(index)}
                    />
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
