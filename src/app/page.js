import Main from './../components/layout/Main'
import ModelsWrapper from '@/components/home/ModelsWrapper'
import ModelSection from '@/components/home/ModelSection'
import DefaulyOverlayContent from '@/components/home/DefaultOverlayContent'

const sections = [
  {
    title: 'Prstenje',
    description: 'Predivno prstenje za posebne trenutke, uspomene i ljubav.',
    theme: 'rgba(214, 231, 246, 0.45)',
    text: 'white',
    image: '/images/prstenje2.jpg',
    url: 'prstenje',
  },
  {
    title: 'Burme',
    description: 'Elegantne burme za važne trenutke, ljubav i predanost.',
    theme: 'rgba(214, 231, 246, 0.45)',
    text: 'white',
    image: '/images/burme.jpg',
    url: 'burme',
  },
  {
    title: 'Narukvice',
    description:
      'Izuzetne narukvice koje osvajaju šarmom, ističu jedinstvenost i odišu elegancijom.',
    theme: 'rgba(255, 242, 0, 0.05)',
    text: 'white',
    image: '/images/shad.jpg',
    url: 'narukvice',
  },
  {
    title: 'Ogrlice',
    description:
      'Ogrlice koje pričaju priču, osvajaju sofisticiranošću i naglašavaju lepotu.',
    theme: 'rgba(214, 231, 246, 0.45)',
    text: 'white',
    image: '/images/oggr.jpg',
    url: 'ogrlice',
  },
  {
    title: 'Mindjuše',
    description:
      'Minđuše koje obogaćuju svaki trenutak svojom neodoljivom privlačnošću.',
    theme: 'rgba(255, 242, 0, 0.05)',
    text: 'white',
    image: '/images/mindjuse.jpg',
    url: 'mindjuse',
  },
  {
    title: 'Privesci',
    description:
      'Privesci koji nose simboliku, očaravaju detaljima i čuvaju uspomene.',
    theme: 'rgba(214, 231, 246, 0.45)',
    text: 'white',
    image: '/images/privesciii.jpg',
    url: 'privesci',
  },
]

export default function Home() {
  return (
    <Main navBg={'transparent'} light={true}>
      <section>
        <ModelsWrapper>
          <section>
            {sections.map((section, i) => (
              // ModelSection je svaka sekcija posebno - mindjuse, narukvice, ogrlice...
              <ModelSection
                // ovo je indentifikator koja sekcija je u pitanju
                key={i}
                sectionID={section.title}
                image={section.image}
                className='modelSection'
                overlayNode={
                  <DefaulyOverlayContent
                    label={section.title}
                    description={section.description}
                    theme={section.theme}
                    txtColor={section.text}
                    url={section.url}
                  />
                }
              />
            ))}
          </section>
        </ModelsWrapper>
      </section>
    </Main>
  )
}
