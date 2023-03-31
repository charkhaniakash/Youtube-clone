import {IconButton, Paper, Button } from '@mui/material'
import React, { useState } from 'react'

import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';




const SearchBar = () => {

  const navigate = useNavigate()

  const [searchItems, setSearchItems] = useState([])

  const { loginWithRedirect, isAuthenticated ,user} = useAuth0();

  const {logout} = useAuth0()

  function handleSubmit(e) {
    e.preventDefault()
    if(searchItems) {
      navigate(`search/${searchItems}`)
    }
    setSearchItems(' ')

  }


// https://auth0.com/
  // Client IDmnYoXmaaLPnNNDMOy4tWrwL6YFaOf6sY


  return (
    <>
        <Paper onSubmit={handleSubmit}
      component='form'
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        marginTop: "1px",
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchItems}
        onChange={(e) => setSearchItems(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
    
    {isAuthenticated && 
      <div>
        <img style={{width:'40px', paddingLeft:'100px'}} src={user.picture} alt={user.name} />
        <h2 style={{color:'white',fontFamily:'sans-serif', fontSize:'15px'}}>Welcome To Dear {user.name}</h2>
      </div>
    }
    <div>
    {
      isAuthenticated ?
      <Button variant="contained" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</Button>
    : <Button variant="contained" onClick={() => loginWithRedirect()}>Log In</Button>
    
    }

    </div>
    </>

  )
}

export default SearchBar
