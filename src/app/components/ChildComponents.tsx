import { url } from "inspector"
import Image from "next/image"

export default function ChildComponents(props:any) {
  return(
    <div className="bg-gray-400 text-white w-80 rounded-lg flex flex-col justify-center items-center">
              <Image src={props.url} width={400} height={400} alt="car" />
              <h1 className="text-5xl">{props.Name}</h1>
              <h1 className="text-5xl">{props.model}</h1>
              <h1 className="text-5xl">{props.color}</h1>

              <h1 className="text-5xl text-green-800">{props.Price}</h1>
            </div>
          
  )
}
