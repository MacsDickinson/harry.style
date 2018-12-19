import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import logo from '../img/harry_sig.png'
import images from '../img/harries';

export default class IndexPage extends React.Component {
	constructor() {
    super()
    
		this.state = {
      harryIndex: 0
    };
  }

  componentDidMount() {
    setInterval(this.togglePic, 2000);
  }
  
  getImage = () => {
    return images[this.state.harryIndex];
  }

  renderHiddenImages = () => {
    return images.map((img, index) => (
      <img key={`harry-${index}`} src={img} alt="moar harry" className="is-hidden"/>
    ))
  }

	togglePic = () => {
    const { harryIndex } = this.state;

    const newIndex = (harryIndex + 1) % images.length;
		this.setState({ harryIndex: newIndex });
	}

  render() {
    return (
      <Layout>
      <section className="hero is-fullheight is-harry is-white" style={{
        backgroundImage: `url(${this.getImage()})`
      }}>
        <h1 className="title"><img className="harry-style__logo" src={logo} alt="Harry" /></h1>
        <audio id="player" autoPlay>
          <source src="./sound/harry.mp3" type="audio/mp3"/>
        </audio>
        <iframe title="silence" src="./sound/silence.mp3" allow="autoplay" id="audio" style={{display: "none"}}></iframe>
      </section>
      {this.renderHiddenImages()}
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
