import React, { useContext} from 'react'
import './CSS/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import exportsModule from '../CarContext'
import SearchList from './SearchList'

const Header = () => {
  
    const expo= exportsModule
    const Search= useContext(expo.contextCar)


  return (
    <div className='bgColor'  >
        <div className='headerBorder' >
            <div className='SearchBox'>
             <input className='inputField' value={Search.searchValue} onChange={(e)=> Search.setSearch(e.target.value)}   type='text' placeholder='Search..'   />
             <i className='inputIcon' ><FontAwesomeIcon icon={faMagnifyingGlass} onClick={Search.setButton} /></i> 
            </div>
        </div>
    </div>
  )
}

export default Header