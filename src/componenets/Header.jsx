import React ,{useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from "react-redux";
function Header() {
    const[burgerstatus,setBurgerstatus]= useState(false); 
    const cars = useSelector(selectCars);
    return (
        <Container>
            <a >
            <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car,index)=>(
                    <a key={index} href="#">{cars}</a>
                )
                    
                )}
    {/* <a href="#">Model S</a>
    <a href="#">Model 3</a>
    <a href="#">Model X</a>
    <a href="#">Model Y</a> */}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>

                <CustomMenu onClick ={()=>setBurgerstatus(true)}/>
            </RightMenu>
            <BurgerNav show ={burgerstatus}>
                <Closewrapper>
                <CustomClose onClick={()=>setBurgerstatus(false)}/>
                </Closewrapper>
                {cars && cars.map((car,index)=>(
                    <li key ={index}><a href="#">{car}</a></li>
                )
                    
                )}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadstart</a></li>
                
            </BurgerNav>
            

        </Container>
    )
}

export default Header;
const Container =styled.div`
min-height :60px;
position : fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding : 0 20px;
top:0;
left:0;
right:0;
z-index: 1;



`
const Menu =styled.div`

display: flex;
align-items: center;
flex:1;
justify-content: center;


a{
    font-weight:600;
    text-decoration:uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}
`

const RightMenu =styled.div`


display: flex;
align-items: center;
a{
    font-weight:600;
    text-decoration:uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}
@media(max-width:768px){
    display: none;
}

`
const CustomMenu =styled(MenuIcon)`
cursor: pointer;

`
const BurgerNav =styled.div`

position: fixed;
top: 0;
right: 0;
bottom :0;
background: white;
width: 300px;
z-index: 16;
list-style:none;
padding:20px;
display: flex;
flex-direction: column;
transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
transition: transform 0.2s ;
li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    a{
        font-weight: 600;

    }
}
text-align: start;


`


const CustomClose =styled(CloseIcon)`


cursor: pointer;
`

const Closewrapper = styled.div`

display: flex;
justify-content:flex-end;

`
