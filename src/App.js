import React from 'react';
import logo from './logo.svg';
import './App.css';

//import "~bootstrap/scss/bootstrap";
//import './App.scss';
// import  "./Node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css"
// import"./Node_modules/jquery-modal/jquery.modal.css"
// import"./Node_modules/normalize.css/normalize.css"
// import"./Assets/style/utils.css"
// import "./Assets/style/font.css"
// import"./Assets/style/style.css"
// import"./Assets/style/customizing.css"
//import"https://maps.googleapis.com/maps/api/js?libraries=geometry&amp;v=3.26&amp;key=AIzaSyBavBqRqL-Af58n62NNOY6b65xiEY4Npao"
// import"./Node_modules/jquery/dist/jquery.js"
// import"./Node_modules/jquery-validation/dist/jquery.validate.min.js"
// import"./Node_modules/particles.js/particles.js"
// import"./Node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js"
// import"./Assets/js/main.js"
// import"./Assets/js/form-validation.js"
// import"./Assets/js/customizing.js"
import {Content} from "./components/content.js"
import {Modal} from "./components/Modal.js"
import {CustomizeMenu} from "./components/CustomizeMenu.js"


function App() {
	
	
  return (
    <div className="App">
      <div id="particles-js" className="hide"></div>
	    <Content/>
	    <Modal/>
	    <CustomizeMenu/>
		  <div className="overlay" id="overlay"></div>
    </div>
  );
}

export default App;
