import HomeBanner from "../../components/template/home/HomeBanner/HomeBanner"
import HomeProduct from "../../components/template/home/HomeProduct/HomeProduct"
import ProductPack from "../../components/template/home/ProductPack/ProductPack"
import HomeTrust from "../../components/template/home/homeTrust/homeTrust"
import HomeNews from "../../components/template/home/HomeNews/HomeNews"

function Home() {
  return (
   <>
    <HomeBanner/>
    <HomeProduct/>
    <ProductPack/>
    <HomeTrust/>
    <HomeNews/> 
   </>
  )
}

export default Home