import { MagnifyingGlass } from "phosphor-react";

type FooterProps = {
    setSearch: (search: string) => void
}

export function Footer(props:FooterProps){
    return(
        <footer className="w-full h-12 bg-[#364A54] m-auto bottom-0 fixed">
        <div className="px-12 py-3">
          <div className="flex justify-start">
            <div className="xl:w-96">
              <div className="input-group relative flex items-center gap-2 w-full">
                <input
                  type="search"
                  className="form-control relative min-w-0 block py-[2px] text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  onChange={(e) => props.setSearch((e.target as HTMLInputElement).value)}
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <MagnifyingGlass
                  size={24}
                  className="cursor-pointer text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}