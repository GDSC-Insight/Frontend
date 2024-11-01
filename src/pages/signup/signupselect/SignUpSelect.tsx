import './SignUpSelect.css'
import { useNavigate } from 'react-router-dom'


export default function SignUpSelect() {

  const navigator = useNavigate(); 

  const onClickCoporation = () => {
    navigator("/coporationsignup")
  }

  const onClickUser = () => {
    navigator("/usersignup")
  }
 
  return (
    <div id='signup-select-warpper'>
        <div className='select-box' onClick={onClickCoporation}>
        <div className='select-text coporation'>기업</div>  
        </div>
        <div className='select-box' onClick={onClickUser}>
        <div className='select-text user' >개인</div>
        </div>
    </div>
  )
}
