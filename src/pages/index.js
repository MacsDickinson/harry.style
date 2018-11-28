import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

import pic from '../img/harry_1.jpg';
import hoverPic from '../img/harry_dcfc.jpg';

const harry = {
	style: {
		'-webkit-filter': 'grayscale(100%)',
    filter: 'grayscale(100%)',
	}
};

export default class IndexPage extends React.Component {
	constructor() {
		super()
		this.state = { pic };
	}

	togglePic = () => {
		this.setState({ pic: this.state.pic === pic ? hoverPic : pic });
	}

  render() {
    const { data } = this.props

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <img
								onMouseOut={this.togglePic} onMouseOver={this.togglePic}
								src={this.state.pic} alt="harry" style={harry.style/* ;) */}
							/>
            </div>
          </div>
        </section>
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
