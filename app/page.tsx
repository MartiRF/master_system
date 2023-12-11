import HeroPage from './components/HeroPage';
import Nav from './components/Nav';
import Sucursal from './components/Sucursal';
export default function Home() {
  return (
    <main className="h-full w-full ">
      <Nav />
      <HeroPage />
      <section id='sucursales' className=''>
        <h1 className='text-4xl font-extrabold text-center'>Sucursales</h1>
        <div className='md:flex my-8 md:justify-evenly'>
          <Sucursal andres='Avenida Puebla' referencia='Ubicada enfrente de la carniceria de chucho flores, de las combis que van a palmillas' andresUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1006.3626149635969!2d-97.65555249963047!3d18.681071456352697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c57858ab0bef65%3A0x46e9bd52e434196a!2sCIBER%20CAFE%20MASTER%20SYSTEM!5e0!3m2!1sen!2smx!4v1701735178848!5m2!1sen!2smx'/>
          <Sucursal andres='Bulevar' referencia='Entre Alvamex y Farmacia de Dios' andresUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d347.6421105020526!2d-97.6564217681446!3d18.68209194756802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c578f66c7cec9d%3A0xb7d6bb1d5221e10d!2sInternet%20Master%20System!5e1!3m2!1ses-419!2smx!4v1702322382075!5m2!1ses-419!2smx' />
        </div>
        
      </section>
    </main>
  )
}
