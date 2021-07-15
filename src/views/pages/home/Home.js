/*
Só é possível utilizar o import por 
causa do webpack, que interpreta e 
manda essa informação para o common.js, 
de forma que os navegadores entendam essa sintaxe.
*/
import homeSectionOne from '../../components/sections/homeSectionOne'
import homeSectionTwo from '../../components/sections/homeSectionTwo'
import floatImage from '../../components/float/floatImage'

let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            <!-- <h1>Início</div> -->
            ${homeSectionOne}
            ${homeSectionTwo}
            ${floatImage}
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;