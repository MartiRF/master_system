'use client'
export interface Props {
  andres:string,
  referencia: string,
  andresUrl:string
}
export default function Sucursal({andres,referencia,andresUrl} : Props) {
  return (
    <div className="flex items-center flex-col md:">
      <div className='p-4 w-full flex flex-col gap-6 md:flex-1 md:w-96'>
        <div className='flex flex-col justify-center items-center'>
          <iframe
            className='w-full border-2 border-blue-400 rounded-lg p-2 items-center'
            src={andresUrl} width="400" height="300" ></iframe>
          <div className="w-full">
            <h1>{andres}</h1>
            <p>{referencia}</p>
          </div>
        </div>
      </div>
    </div>
  )
}