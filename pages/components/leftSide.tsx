import {AiOutlineInstagram} from 'react-icons/ai'
import {GrLinkedinOption} from 'react-icons/gr'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'

const leftSide = () => {
  return (
    <>
        <div className='my-20 text-3xl justify-between h-1/3  md:flex md:flex-col'>
            <a className='m-auto' href='https://github.com/utkarsh0908' target="_blank"><AiFillGithub/></a>
            <a className='m-auto' href='https://www.linkedin.com/in/utkarsh-singh-432228213/' target="_blank"><GrLinkedinOption/></a>
            <a className='m-auto' href='https://www.instagram.com/utkarsh.0901/' target="_blank"><AiOutlineInstagram/></a>
            <a className='m-auto'><AiOutlineTwitter/></a>
        </div> 
       
    </>
  )
}

export default leftSide