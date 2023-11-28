import './Article.css'
import NavStatus from '../../components/module/NavStatus/NavStatus'
import Articles from '../../components/template/article/Articles/Articles'

function Article() {
  return (
    <>
        <NavStatus status='وبلاگ'/>
        <Articles/>
        <br /><br /><br /><br />
    </>
  )
}

export default Article