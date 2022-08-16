import { Pencil, Trash } from "phosphor-react";
import { inputs } from "../../App";

type TableProps = {
  search: string;
  infos: any[];
  editHospede: (id: number, nomeHospede: string) => void;
  deleteHospede: (index: number) => void;
  filtro: any[];
};

export function Table(props: TableProps) {
  return (
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
        {props.search.length == 0
          ? props.infos.map((hospede, index) => (
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
                    onClick={(e) => props.editHospede(index, hospede.nome)}
                  />
                </td>
                <td className="max-h-14 p-[6px]">
                  <Trash
                    size={32}
                    weight="bold"
                    className="cursor-pointer"
                    onClick={(e) => props.deleteHospede(index)}
                  />
                </td>
              </tr>
            ))
          : props.filtro.map((hospede: typeof inputs, index: number) => (
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
                    onClick={() => props.editHospede(index, hospede.nome)}
                  />
                </td>
                <td className="max-h-14 p-[6px]">
                  <Trash
                    size={32}
                    weight="bold"
                    className="cursor-pointer"
                    onClick={() => props.deleteHospede(index)}
                  />
                </td>
              </tr>
            ))}
      </tbody>
    </table>
  );
}
