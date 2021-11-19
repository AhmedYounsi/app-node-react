import React, { useState } from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'
import Navbar from '../../../layout/Navbar'
import './login.css'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../../actions/auth'
import '../../../layout/style.css'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }
  return (
    <div className=" min-vh-100 d-flex flex-row align-items-center">
      <Navbar />
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <h6 className="x-large">Manage your HR processes</h6>
            <p className="lead">
              Spend less time doing administrative HR tasks and focus on what
              matters
            </p>
          </Col>
          <Col xs={12} md={9} className="login">
            <Card className="text-center" style={{ width: '23rem' }}>
              <Card.Body>
                <form className="form" onSubmit={onSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={email}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={onChange}
                      minLength="6"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Login"
                  />
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { login })(Login)
