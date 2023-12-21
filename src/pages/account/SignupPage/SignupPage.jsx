import React from 'react'
import SignupForm from './SignupForm'
import Description from '../LoginPage/Description'


function SignupPage() {
  return (
    <div>
        <section style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }} >
            <div style= {{ flex: '1', display:'flex' }}>
                <Description />
                <SignupForm />
            </div>
        </section>
    </div>
  )
}

export default SignupPage