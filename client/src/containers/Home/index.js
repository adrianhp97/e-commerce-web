import React, { Fragment } from 'react'

import Card from '../../components/Card/Card'

const Home = () => (
  <Fragment>
    <Card 
      title={"test"}
      link={{to: '/', text: 'ss'}}
    >
      <p>Did you get here via Redux?</p>
    </Card>
    <Card 
      title={"test"}
      link={{to: '/', text: 'ss'}}
    >
      <p>Did you get here via Redux?</p>
    </Card>
  </Fragment>
)

export default Home