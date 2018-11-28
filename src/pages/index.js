import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

import pic from '../img/harry_1.jpg';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <img src={pic} alt="harry" />
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