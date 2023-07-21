import Image from "../../node_modules/next/image"
import IconSearch from "../../public/assets/icon-search.svg"

export function Search() {
  return (
    <div className="flex items-center gap-4">
      <Image src={IconSearch} alt="Search Icon" />
      <input
        type="text"
        placeholder="Buscar"
        className="bg-transparent outline-none pr-5 text-white placeholder:text-white"
      />
    </div>
  )
}
