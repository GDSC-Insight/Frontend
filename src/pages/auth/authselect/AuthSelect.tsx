import './AuthSelect.css'
import { useNavigate } from 'react-router-dom'


export default function AuthSelect() {

  const navigator = useNavigate(); 

  const onClickCoporation = () => {
    navigator("/corporationauth")
  }

  const onClickUser = () => {
    navigator("/userauth")
  }
 
  return (
    <div id='signin-select-warpper'>
        <div className='select-box' onClick={onClickCoporation}>
        <div className='select-text coporation'>기업</div>  
        </div>
        <div className='select-box' onClick={onClickUser}>
        <div className='select-text user' >개인</div>
        </div>
    </div>
  )
}
