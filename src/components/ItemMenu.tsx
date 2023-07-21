import Image from "../../node_modules/next/image"
import Arrow from "../../public/assets/arrow-down.svg"

type Props = {
  name: string
}

export function ItemMenu({ name }: Props) {
  return (
    <button className="flex items-center gap-3">
      <span className="text-white font-bold">{name}</span>
      <Image src={Arrow} alt="Arrow dropdown" />
    </button>
  )
}
