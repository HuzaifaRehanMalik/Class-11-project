import ChildComponents from "./ChildComponents"
export default function ParentsComponnts() {
  const CarName =[
    {
      Name:"ALTO",
      model:2023,
      color:"white",
      Price:"2000000",
      url:"/download-1.jpeg"
      
    },
    {
      Name:"Carolla",
      model:2023,
      color:"white",
      Price:"2900000",
      url:"/download-2.jpeg"
    },
    {
      Name:"Civic",
      model:2023,
      color:"white",
      Price:"5500000",
      url:"/download-3.jpeg"
    },
    
    {
      Name:"Swift",
      model:2023,
      color:"white",
      Price:"4500000",
      url:"/download-4.jpeg"

    }
  ]
  
  return (
    <div className=" py-10 px-10">
      <h1 className="font-bold text-center text-5xl md:text-7xl lg:text-9xl md:text-center py-10 px-10">Featured New Cars</h1>
      <div className=" flex flex-col gap-5 lg:flex-row justify-between items-center ">
        {
          CarName.map((Car)=>(
            
              <ChildComponents 
              Name={Car.Name} 
              model={Car.model} 
              color={Car.color} 
              Price={Car.Price} 
              url={Car.url} />

  
          ))
        }
      </div>
    </div>
  )
}
