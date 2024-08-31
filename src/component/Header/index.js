import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from '../SearchBox';
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaBell } from "react-icons/fa";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { FaShieldAlt } from "react-icons/fa";
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log("eventevent", event)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <header className=' d-flex align-items-center'>
        <div className='container-fluid'>
          <div className='row d-flex align-items-center w-100'>

            {/* logo image */}
            <div className='col-sm-2 part1'
            >
              <Link to={'/'} className=' d-flex align-items-center logo'>
                <img src={logo} />
                <span >Trekz</span>
              </Link>
            </div>


            <div className='col-sm-3 d-flex align-items-center part2 pl-4'>
              <Button className='rounded-circle mr-3'>
                <MdMenuOpen />
              </Button>
              <SearchBox />
            </div>

            <div className='col-sm-7 d-flex align-items-center part3 justify-content-end'>
              <Button className='rounded-circle mr-3'> <MdLightMode /> </Button>

              <Button className='rounded-circle mr-3' > <MdShoppingCart /> </Button>

              <Button className='rounded-circle mr-3'> <MdEmail /> </Button>
              <Button className='rounded-circle mr-3'> <FaBell /> </Button>
              <Button className='rounded-circle mr-3'> <MdMenuOpen /> </Button>

              <div className="myaccwrapper">
                <Button className="myacc d-flex align-items-center" onClick={handleClick}>

                  <div className='userImag'>
                    <span className='rounded-circle'>
                      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAwQMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAADAgQFBgABBwj/xAA+EAABAwIEBAMFBgQEBwAAAAABAAIDBBEFEiExBhNBUSJhcRQygaGxByNCkcHRFTNi4VJUcpIWJDQ1Q1Pw/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QAIREAAgIDAAIDAQEAAAAAAAAAAAECEQMhMRJBBDJRIhP/2gAMAwEAAhEDEQA/AOrnZAkRUJ6iaBw33R6JSQ3YeiWFxxsJQWgEoBEBsJTVoJbQiBigljZMsTxGlwqifVVswjib13JPYDqVyfizj6txNzqahc6ko9rNNnv/ANR/QKkINiNnRcb4zwXBs7Jqls8zd4oCHEHsTsFRsV+1Wue8tw2mhp4ujpPvHfoAudySONyD111QHOdfz7LTHFH2K7Lm/wC0fiISZ/bG27CJtvoprA/tVqWS5MZgZNFfWSJuV7fhsfkubRwySAnKSAkOjmY7VpBTvHBoGz0xhmIUWL0bKqgnZNC8bt3B7EdD5I/KYD4RZed+HOIMQwCvbU0slh/5GEXa8diF3ThnH6XiDDm1UByyDSWI7xu/ZYc2FR2FP9JbPlCrHFuLPggLItD5FWZ1rFU/iiFsjTpfRYsk2mkdPhQKvEJJnkvkN0A4jJGNHrWIUxY8mzh5FRcjiLg9FpiotGVoloeI6yE2bJp5pnijxiLXSSWLyPyTEDS5SZZnNaQD0RcPwKZX6xnKlc0JnLqpCrYXPJd1QBEOqtxFUxhlPYrFIclqxdYbPUKQ9LQ3rOag7dh6IgQ2bBFamOFAJYSQltC4BsBLatAJbdwmEbOMfaRjUlfjstM2RwgpCY2t6X/EfzVLvndY6+ad4nMZ6qaZxOaR7nm/W5um0Q2WuOkBKxzT4eZQHXGUqbwzB6Z0rDJGHHbyTShdaFo9VIUtRkk1OylKbLLHomxQU9O2zIYxfsECaCLU5W39FsVeYLDd4uUHkOjjGjqKkl0kgjIOm1k9wqnfgeIQYnhj3GL3KiAndh3t6boYhN07o8wuw6tO4Km8uqZ08PtF7/isLmnx36KKrZ45yQB8VWXTupxkJIy6AeSE/FSBbVYfBtmJzfGFxmmY6J7ngXGoNlU6mFutwNVJ1mIPmJDnkjtdRM8w1stMUyTdjCcCMaKMnm8Vk+rH3BKiXsL3XutUeBSNucHoDzZGEeXVDmbYpqsbgLOeyxbyhYh4hs9PpLtltadsshtDM2CIxCZsEZiJwRqI1DaEUJhWbS2gX1Wgg11ZBh9I+qq5BFDGLuceiYU894lSmGvqINuTK+P1sSP0QWQjtZTvGL6d2PVM9A/mU9Q7mtdlIsTuLHzuohhuLlVttFYqkFhe2MAJ1A7NcApi1uZ9gjw1NLSvtLKAeyWmVtUTMEbjaxT+IWtdRNNjdDoGvNz3ba6m6R8dSA6Ih3opT10aCsXlAGqHE5zX2t1TgwlxuBoFG1VVUe0iKko3SuvZSWxpqkJxyYMq8oO7GlRD3udubBPOImVMT6WWrj5b3xltv9J/YhQ002UbqsYI8XNamxUr03kNwg8/Md0l8oA3V/AmInPh1TNtid0qokuN01DyNym8aKILM622yYyPuUV7nO2SHR6XQv0PQHMsSsi2u2ceoEl2yUtFZDaEj2CMxBZsjMROCtRGobUVqdCMWFW/tEDjwrO1ovmkjDvTMFZAmeN0f8QwqqpQBmfGcmn4tx80QJ7s4FWHLUCB17d/NIcDG0DqNE/qorM5z4yLvLgHDUeSjqlxdNbyBVImmddFOnDW2cDbq4BNmukEh9loRNfZz7J7TML5MotY9VOR4LeJr2PLSdfCboN0MlZGGgLsOFU+OBs1/wDpmxOzfnt3/JKwmulgnyN2d30t5J+/Dnt0klkc0dEKjoiyrDixwbfSym9rY0dExVYi+joszG55n6b6Ad1F4RFjVc6WWaq8bwRHklytbtYkWv8AC/VTc1CXxZS3xDZN4KKSOxvkDtwCpajob7Mb8WR1LMPw32uds8sb3tLwLDUNP6FVCqcrrxBFzMClsNadzZGn5H5FUGeW43V8NNWeV8mFZAd7FCllPREBzCyC9m6spbIUCe+41QybkLbwk2XSZSJIQRNdHtqmkxDSQtsqixuVN5TmN+6nFhfTOYFiEtp7BR6hWitrXVZDaEZsjMQmorETgrEZqCxFCexGLC2kgraHkAqXFPBseJufVYfM2lqXXMmYFzHi29uhuuMvu2e7urAV6Gxyv/heC19flD/ZqaSUNP4i1pNl54rZ2kw1DfdeLKmN2PFioazlOsFacMxVrow15sbdVT44xJm2T6mZIaSblOIe0NJtqcvUBdONmmDJ2uxAVBLYHEkHXLsfJZDxBSQBsbqa0g2fa+qjMOe/Q/fFpJF2x3HyUlFgcVQQ+SGYvcA9pMZ67Eeqm0kUTsseH19PVwOqamdsUYbdzn6W/v5IdbXUns4kp5SWsuXOI6ei3hXDPtFnTF74GtsWubYC3XyUTWSUVY00mBUr3QuYWuqJLguJ0ytafqfyUq2FvZrjXExScPQQxlpfXk2P9DbEn8yAudPlup/jd4GJw0DNYcPp20+boXD3rfHT4KtlaMaUUeXnflNsdwvSnkJm15alglw3TOVEvGzH2QXOsluBH90JzSVz2rGSoQ46rTn6JfLI1shvClYaEZ1i1ZYjbOo9TpJ3Skk7qZpDMRWITUZiIGFYlONhdJYseCWrpuouhWabKHGwR2lM4oyJCSE8b6XPZQwuUugKl9qNa+k4PrY4xrUjk37Ag3+QsvP1NWZoDTSnzYey6P8AadxDLiGNew07waCmzDQ+9INye/b81y2vhLJHWFhfUdv7L0cUKiBS2SVBW8qXLLewNlOUdSIpQ9h0KpQmNvGbno7909psQMRAdq3sF0ol4ZKOiUEwpqhskEjoXfheweh1HXZXXCMZqOWzmZJmts3NGwEEA38iN1zGhqRUQAA326qbwzEZqYkCNpPQkkLNOJpj4y6dFr6+sxGlkpKJpg5h8coABAO4A16dVW68x4MGxUUYkq5SWQtA0aBu8+iPh+M1TYbPsXuG4BCFDG+qr5XsGYRhsV7dhc/MqEpVtk80ljj/ACipY5hTpWvNvFvm7qnz0c0LrOjcB6LuMOD+0H7wC3ZErMDpTC5nKG2miWPyKPOp9OC8s21aQnFDFnkaDqFe6vhMz1EjY2BrL32T3DeD/Z2Bz7Zh1Ko8yoZFNfQtfG4ZRoox9IQdAbhXjGsPfTysa1upNrjqpXC8DhkiyOiFyLIvN/Bz6c9osLfWEiPS25TLFsJnopuW8DuD3XUhgAw1znsaQ291W+LTFLyrEBwFt1OEm2d7KH7Of8KxTvJH+MLFew2d/SSdUpIPvIIuGYjsQWIzEUgMKxLtcJLURuyarFZpjQqTxzxc6kz4ZhEoFTtNOBcRnsP6u/ZOeM+K20DJKDDn/wDN2tJKNor9P9X0XJa+qb42jxE3sCd+tyrYMN7JTlWiOkkbVCQkFsg0c09FHOewh0cpyyM8Ic4aEdnLC94IrGXMhd94Oj77INQ4zAVFO4Z9srtnDsfNa3oCGlRBlvkG27b3I/cJqAQU9LXm2RpDT4mtJ1b3F0IRiUkH3xuNnfsVNodDjD8SkpXAXu1WPD8evK0vAsFT3xuZcjxAdtx8FkdXPEbxSZT3tupyS9lI5HE6S/isMJbC0Pd+Epvwbx87D8ZNBXtZJR1M2swHiY9x382/RUNpnlB5ElrixaevxTGN5ZIHC4IPzSSxRaoWcnLp64pw1p8IFvJJrpA1g01VT+yzjZvFEctDVwiOvp4muzN92RuxPkdtPNXirpGys0Gq86WCUdHJFepWmbMWi5vqjVZ5cGyexUwiLms0IWp6LnMIIv6pVFneJWKqlFfPEOxup2goxA3xt1tohikbTTMcNLJ9O61O6TXQGy5sRog+JqyOChkuQDlXLKOGXFaxziSWZjZOeOsVq34iYDK7l391T3A2EzOhbIYDbcG261ajCzqbQx/gDu3yWLovsB/9PyWKP+khfGRKBJPvBbB0SHHX4qxpHTUZiCxGYmAwreyqHF/FgpeZQYY/7+1pZ2n+X3A8/olcZ8TsoKd1BQTA1LgWyPB/lA+fdcurqp2rIveA1I/D/fyWjHjsjOaRvEKvK2T3nFoLnZj8yoNkhe4SOJcZATmO+1rH0uneJVIGHhkTQDIDc9+6ZAXw+nOzmj8yP7LdFUiFuwNPFzaLJmykeEeRvcKPfC94e+EWftJGep/dSVE8Ne9nnoh18PLm5rfck94Doe6WWx06I2GrP8qUE67ncHzW6tnNaHxxlzm66ItRTiS8g0cNyPqmwfKHPDrP090mxUm2UQpkgnpnPbfOzQg+8PihMY2YF2ot1G6EZbAm7gdr/oUWnDbEnb/7RDoR7hsQpnOrKjLyaW0jhb33fgb8Tb4KHmmfUVEs8hBkkeXuIFtTqdFY8cpH0mEQUxvnB58/m49PgPmVWXtyvsd7b91N9saUWizcEY7Lw/jlBiMUjmRxyhtS0GwfGdHX79/gvVTHsfG17HAtcLgg6Ed142pmue7IwEueQwAdSei9JfZvxF7dFJg85DpaFrWRyb8xoAB/Ig/CySUfYrdF0dCHPvtpqs5LR3RVhUqQ1sjKuhEkrAL2J1N0+NPE6HllgyEWtZbeBmalucACkjBHN2cA4noz/wAeNoajVgkBB7jou1YFQxQYfEGtHujZcd+1apFPxhTVkBs9jATbrYrrfBuKR4vgNNVRn3m6+RVGrijlzRMcqP8AwBYiWWIUgWyDCS5bCFI+2yQoPYXBzRY6hVXjHi5mH5sPw2Ue1DSWQa8vyHn9FH8WcSuwyP2akeW1UoPiH4G9/Vc3nqMzy65zE+I31PqVfFjt2xJSH0lS6V92u1J8Qdub9ig1crRGTGAGs0ytCZQzWnc0tBa4ag9VjpxE27nWYNMztcuvXuPNbY1EzSjbA1Yc6NjeznC487EJFU8Nha3ZrBYJ4HRujykWy732H9V/oE1kpnSEucDk3aD9T5+SPkGiPhdY5xv1Unds0Ra7UEJk2nc8Oyjql0ry1+Q7hcNQkNLHGN+pA37tUVWsyTFnX8BPUKwSxF4Dmj7xurfPuFE4y0SRMmj0skkMhkSyWCNxaBMDlce/a6mOGaD2ytEkjbwQfeS/1W2Hx2+KrzHZxc33F7LoeFUow3D2Up/nP+8n8j0b8PqVNvVFsUPKQPFIPaGvdMBmkvc+qotTARA63vwOyu9Oi6K5gcLO1CqeKU7YMUykDl1LMvoQhVqi/wAiOrBcIUxmqKiq/wAozMD2c42B+FiV0TgOQU3EmH8l4a3Pyy0eY699VQOEqwYbWVtBOWtbVxiMOO2YHT87lXHAQ6mximrLBns8zHPB7XCRq07Ml0zvUszYGZnnQbrUVQyZmZvVM8RqYmlgzCzrIkT444C7MLLM2FJtjSSvL6tsTWuGUnXunUzpnxvDOrSowzwvq2Oa8EAm6k5Klghc7MLWKVHTi29HA/tHgqP44HTD3m2arV9mT8dwalPMgz0D9Wxk+IeiYcU1NPifGFHTizmRO8R6XJXTsPbTw5WktFmgBpKtKVQSGjEV/wARP/yE3+1Yn+WLuz81ilbGpDFqbVRIjNlixcccVxmeSoxGpmlN3uLifgbfRRhJzfFYsW7HwjIOz+cw2RagAx5SBZ2h9FixWJPozw9xEfL3ayRzW31sLA/qpGHcrFiX9GY0jGWvcATY2NkrFYIwwTtbZ4NtOqxYuQwKF5s0+aj8bAZUPa0WEjA93qtrFzOGPDEbH45BnaHNjJeGnYloJF/K4V1gJfmc43c7UnuVtYpezRg+yHLtWgqt8Wi1NHIPebI2xWLF0TVm+jIfF42l8UhHifH4vNWHhSsnrqBjKl+cRSlgPVwyki/eyxYlmeedTpJ5JqWnMjiTy2/RFlqJeXlzm3ZYsWSXR0Q1bNIwXY9w16FM56+qMBaZ5CLbZisWKiWhX0qbP+5CT8V91PS11S2xbK4adCsWKz4gAP4jWf5iT/cVixYhSOP/2Q==" />
                    </span>
                  </div>

                  <div className='userInfo'>
                    <h4>pollab kumar</h4>
                    <p className='mb-0'>pollavkumar@</p>
                  </div>

                </Button>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
               
               
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Avatar fontSize="small" />
                    </ListItemIcon>
                    Profile
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <FaShieldAlt />
                    </ListItemIcon>
                    Reset Password
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>



            </div>




          </div>
        </div>
      </header>
    </>
  )
}

export default Header