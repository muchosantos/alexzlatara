import CollectionBaner from '@/components/custom/CollectionBaner'
import Footer from '@/components/custom/Footer'
import SpaceFromTop from '@/components/custom/SpaceFromTop'
import Main from '@/components/layout/Main'
import Image from 'next/image'

const Onama = () => {
  return (
    <Main navBg={'#fff'}>
      <SpaceFromTop />
      <CollectionBaner collection={`O nama`} about={true} />

      <div className='px-[1.5rem] md:px-[2rem] lg:px-[4rem] my-[5rem]'>
        <div className='w-[85%] my-[5rem]'>
          <span
            style={{ fontFamily: 'var(--font-lato)' }}
            className='uppercase font-[.8rem] font-normal mb-[-2.5rem] block'
          >
            since
          </span>
          <span
            style={{ fontFamily: 'var(--font-lato)' }}
            className='text-[8rem] block tracking-tighter ml-[-.3rem]'
          >
            2006
          </span>

          <p
            className='text-[1.2rem] font-light'
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            Dobrodošli u Zlataru Alex, dom elegancije i vrhunske izrade, koja je
            5. juna 2006. godine zapo<span className='fontt'>č</span>ela svoju
            pri<span className='fontt'>č</span>u u srcu Svilajnca. Više od 18
            godina posvećeni smo umetnosti stvaranja unikatnih komada nakita i
            satova, koji nose pri<span className='fontt'>č</span>u i emociju.
          </p>
        </div>
      </div>

      <div className='relative w-full h-[50vh]'>
        <Image
          src={'/baners/about1.jpg'}
          className='object-cover w-full h-full'
          width={5000}
          height={5000}
        />
      </div>

      <div className='px-[1.5rem] md:px-[2rem] lg:px-[4rem] my-[5rem]'>
        <div className='w-[85%] my-[5rem]'>
          <span
            style={{ fontFamily: 'var(--font-lato)' }}
            className='uppercase font-[.8rem] font-normal mb-[-2.5rem] block'
          >
            ponuda
          </span>
          <span
            style={{ fontFamily: 'var(--font-lato)' }}
            className='text-[8rem] block tracking-tighter ml-[-.5rem]'
          >
            Nakit
          </span>

          <p
            className='text-[1.2rem] font-light'
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            Naša ponuda obuhvata pažljivo birane i ru
            <span className='fontt'>č</span>no izra
            <span className='fontt'>đ</span>ene kolekcije: Prestižni nakit sa
            blistavim Swarovski kristalima. Raznovrsne komade od zlata i srebra
            – od klasi<span className='fontt'>č</span>nih do modernih. Elegantne
            i pouzdane satove, savršene za sve prilike.
          </p>

          <p
            className='text-[1.2rem] font-light block mt-[2rem]'
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            Verujemo da svaki komad nakita ili sat ima moć da ovekove
            <span className='fontt'>č</span>i poseban trenutak. Zato smo tu da
            vam pomognemo da prona<span className='fontt'>đ</span>ete savršen
            izbor, bilo da tražite poklon za voljenu osobu, simbol za važnu
            životnu prekretnicu ili jednostavno želite da nagradite sebe.
          </p>
        </div>
      </div>

      <div className='relative w-full h-[50vh]'>
        <Image
          src={'/baners/about2.jpg'}
          className='object-cover w-full h-full'
          width={5000}
          height={5000}
        />
      </div>

      <div className='px-[1.5rem] md:px-[2rem] lg:px-[4rem] my-[5rem]'>
        <div className='w-[85%] my-[5rem]'>
          <span
            style={{ fontFamily: 'var(--font-lato)' }}
            className='uppercase font-[.8rem] font-normal mb-[-2.5rem] block'
          >
            kvatlitet
          </span>
          <span
            style={{ fontFamily: 'var(--font-lato)' }}
            className='text-[8rem] block tracking-tighter ml-[-.7rem]'
          >
            Izrada
          </span>

          <p
            className='text-[1.2rem] font-light'
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            Pored bogate ponude, ponosni smo na naše usluge izrade unikatnih
            komada po narudžbini, graviranja i reparacije, gde svaki detalj
            radimo s ljubavlju i preciznošću. Zlatara Alex nije samo mesto gde
            kupujete nakit – to je prostor gde se stvaraju uspomene i{' '}
            <span className='fontt'>č</span>uvaju tradicije.
          </p>

          <p
            className='text-[1.2rem] font-light block mt-[2rem]'
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            Posetite nas na adresi Kriva <span className='fontt'>č</span>aršija
            1, Svilajnac, i doživite magiju luksuza i prefinjenosti. Hvala vam
            što ste deo naše pri<span className='fontt'>č</span>e i što zajedno
            sa nama slavite lepotu i sjaj od 2006. godine.
          </p>
        </div>
      </div>

      <div className='relative w-full h-[50vh]'>
        <Image
          src={'/baners/about3.jpg'}
          className='object-cover w-full h-full'
          width={5000}
          height={5000}
        />
      </div>

      {/* <div className='w-[85%] my-[5rem]'>
          <span
            style={{ fontFamily: 'var(--font-lato)' }}
            className='uppercase font-[.8rem] font-normal mb-[-2.5rem] block'
          >
            since
          </span>
          <span
            style={{ fontFamily: 'var(--font-lato)' }}
            className='text-[8rem] block'
          >
            Ponude
          </span>

          <p
            className='text-[1.2rem] font-light'
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            Naša ponuda obuhvata pažljivo birane i ručno izrađene kolekcije: •
            Prestižni nakit sa blistavim Swarovski kristalima, • Raznovrsne
            komade od zlata i srebra – od klasičnih do modernih, • Elegantne i
            pouzdane satove, savršene za sve prilike. Verujemo da svaki komad
            nakita ili sat ima moć da ovekoveči poseban trenutak. Zato smo tu da
            vam pomognemo da pronađete savršen izbor, bilo da tražite poklon za
            voljenu osobu, simbol za važnu životnu prekretnicu ili jednostavno
            želite da nagradite sebe.
          </p>
        </div>

        <div className='w-[85%] my-[5rem]'>
          <span
            style={{ fontFamily: 'var(--font-lato)' }}
            className='uppercase font-[.8rem] font-normal mb-[-2.5rem] block'
          >
            since
          </span>
          <span
            style={{ fontFamily: 'var(--font-lato)' }}
            className='text-[8rem] block'
          >
            Izrada
          </span>

          <p
            className='text-[1.2rem] font-light'
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            Pored bogate ponude, ponosni smo na naše usluge izrade unikatnih
            komada po narudžbini, graviranja i reparacije, gde svaki detalj
            radimo s ljubavlju i preciznošću. Zlatara Alex nije samo mesto gde
            kupujete nakit – to je prostor gde se stvaraju uspomene i čuvaju
            tradicije. Posetite nas na adresi Kriva čaršija 1, Svilajnac, i
            doživite magiju luksuza i prefinjenosti. Hvala vam što ste deo naše
            priče i što zajedno sa nama slavite lepotu i sjaj od 2006. godine.
          </p>
        </div>
      </div> */}

      <Footer />
    </Main>
  )
}

export default Onama
