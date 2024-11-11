import Image from 'next/image'
import Main from './../components/layout/Main'
import ModelsWrapper from '@/components/home/ModelsWrapper'
import ModelSection from '@/components/home/ModelSection'
import DefaulyOverlayContent from '@/components/home/DefaultOverlayContent'

const sections = [
  {
    title: 'Narukvice',
    description: 'Narukvice koje ističu vašu eleganciju',
    theme: 'rgba(255, 242, 0, 0.05)',
    text: 'black',
  },
  {
    title: 'Ogrlice',
    description: 'Ogrlice koje naglašavaju vašu lepotu.',
    theme: 'rgba(214, 231, 246, 0.45)',
    text: 'black',
  },
  {
    title: 'Satovi',
    description: 'Muški i ženski satovi za svaku priliku',
    theme: 'rgba(253, 235, 218, 0.45)',
    text: 'black',
  },
  {
    title: 'Prstenje',
    description: 'Predivno prstenje za posebne trenutke.',
    theme: 'rgba(214, 231, 246, 0.45)',
    text: 'black',
  },
  {
    title: 'Mindjuse',
    description: 'Predivno prstenje za posebne trenutke.',
    theme: 'rgba(255, 242, 0, 0.05)',
    text: 'black',
  },
  {
    title: 'Alex Zlatara',
    description: '',
    theme: '#000',
    text: 'white',
  },
]

export default function Home() {
  return (
    <Main navBg={'transparent'} light={true}>
      <div>
        <ModelsWrapper>
          <div>
            {sections.map((section, i) => (
              // ModelSection je svaka sekcija posebno - mindjuse, narukvice, ogrlice...
              <ModelSection
                // ovo je indentifikator koja sekcija je u pitanju
                key={i}
                sectionID={section.title}
                className='modelSection'
                overlayNode={
                  <DefaulyOverlayContent
                    label={section.title}
                    description={section.description}
                    theme={section.theme}
                    txtColor={section.text}
                  />
                }
              />
            ))}
          </div>
        </ModelsWrapper>
      </div>
    </Main>
  )
}
