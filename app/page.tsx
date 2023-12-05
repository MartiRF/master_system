import HeroPage from './components/HeroPage';
import Nav from './components/Nav';
import Sucursal from './components/Sucursal';
export default function Home() {
  return (
    <main className="h-full w-full ">
      <Nav />
      <HeroPage />
      <section>
        <h1 className=''>Sucursales</h1>
        <div className='p-2 w-full flex flex-col gap-6'>
          <div className='flex flex-col justify-center items-center'>
            <iframe
              className='w-full border-2 border-blue-400 rounded-lg p-2 items-center'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1006.3626149635969!2d-97.65555249963047!3d18.681071456352697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c57858ab0bef65%3A0x46e9bd52e434196a!2sCIBER%20CAFE%20MASTER%20SYSTEM!5e0!3m2!1sen!2smx!4v1701735178848!5m2!1sen!2smx" width="400" height="300" ></iframe>
            <h1>Avenida Puebla</h1>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1006.3626149635969!2d-97.65555249963047!3d18.681071456352697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c57858ab0bef65%3A0x46e9bd52e434196a!2sCIBER%20CAFE%20MASTER%20SYSTEM!5e0!3m2!1sen!2smx!4v1701735178848!5m2!1sen!2smx" width="400" height="300" ></iframe>
        </div>
      </section>
    </main>
  )
}
