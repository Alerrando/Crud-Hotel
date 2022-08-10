import { useState } from 'react'
import { PlusCircle } from 'phosphor-react'

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
    </>
  )
}

