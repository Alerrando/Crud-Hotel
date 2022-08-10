import { useState } from 'react'
import { Pencil, PlusCircle, Trash } from 'phosphor-react'

export function App() {

  return (
    <>
      <header className='w-full h-20 bg-[#364A54] flex items-center'>
        <div className='w-full py-2 px-12 flex justify-between'>
            <h1 className='text-3xl text-white'>Cadastro de Hóspedes</h1>

            <button className='flex items-center gap-2 text-white bg-green-600 px-3'>
              <PlusCircle size={26} weight="bold" />
              Adicionar novo hóspede
            </button>
        </div>
      </header>

      <main className='m-8'>
        <table className='w-full border-collapse'>
          <thead className='bg-zinc-400 text-xl'>
            <th className='p-1 text-start'>Id</th>
            <th className='p-1 text-start'>Nome</th>
            <th className='p-1 text-start'>Email</th>
            <th className='p-1 text-start'>Telefone</th>
            <th className='p-1 text-start'>Endereço</th>
            <th className='p-1 text-start'>Data de Nascimento</th>
            <th className='p-1 text-start'>Editar</th>
            <th className='p-1 text-start'>Excluir</th>
          </thead>
          <tbody>
            <tr className='border-b-2'>
              <td className='max-h-14 p-[6px] ver'>1</td>
              <td className='max-h-14 p-[6px] ver'>Alerrando</td>
              <td className='max-h-14 p-[6px] ver'>alerrando2@gmail.com</td>
              <td className='max-h-14 p-[6px] ver'>(18)99823-3887</td>
              <td className='max-h-14 p-[6px] ver'>Rancharia</td>
              <td className='max-h-14 p-[6px] ver'>16/10/2002</td>
              <td className='max-h-14 p-[6px] ver'><Pencil size={32} weight="bold" /></td>
              <td className='max-h-14 p-[6px] ver'><Trash size={32} weight="bold" /></td>
            </tr>
            <tr className='border-b-2'>
              <td className='max-h-14 p-[6px] ver'>1</td>
              <td className='max-h-14 p-[6px] ver'>Alerrando</td>
              <td className='max-h-14 p-[6px] ver'>alerrando2@gmail.com</td>
              <td className='max-h-14 p-[6px] ver'>(18)99823-3887</td>
              <td className='max-h-14 p-[6px] ver'>Rancharia</td>
              <td className='max-h-14 p-[6px] ver'>16/10/2002</td>
              <td className='max-h-14 p-[6px] ver'><Pencil size={32} weight="bold" /></td>
              <td className='max-h-14 p-[6px] ver'><Trash size={32} weight="bold" /></td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}

