import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0;
    paddinG: 0;
    box-sizing: border-box;
    outline: none;
   }

   body{
     background: #DCDCDD;
     color: black;
   }

   body, input, button,textarea{
     font-family: "Roboto Slab", serif;
     font-size: 16px;
   }
   h1,h2,h3,h4,h5,h6,strong, button{
     font-weight: 400;
   }
   button{
     cursor: pointer;
   }

`;
