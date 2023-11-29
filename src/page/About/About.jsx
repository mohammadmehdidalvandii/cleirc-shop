import NavStatus from '../../components/module/NavStatus/NavStatus'
import AboutTitleBanner from '../../components/template/about/AboutTitleBanner/AboutTitleBanner'
import HomeTrust from '../../components/module/HomeTrust/HomeTrust'

function About() {
  return (
    <>
      <NavStatus status='درباه ما'/>
      <AboutTitleBanner/>
      <HomeTrust/>
    </>
  )
}

export default About