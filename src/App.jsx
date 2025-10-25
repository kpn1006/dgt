import { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {cyear:new Date().getFullYear()};
    }
    render() {
        const {cyear} = this.state;
        return (
            <div className='app'>
                <div className='header'>
                    <div className='logo'>Dinesh<span>G</span>Tailoring</div>
                    <div className='address'>Prop: <span>P Gopinath</span>, No.80, Lakshmi Complex, Church Street, Karaikal - 609602.</div>
                </div>
                <section>
                    <div className='content'>
                        <div className='leftPanel'>
                            <h1>Dress Beyond <span>Expectations</span></h1>
                            <p>Choose Custom Tailoring for a Signature Look</p>
                        </div>
                        <div className='rightPanel'>
                            <div className='panel'>
                                <h2>Sign In</h2>
                                <label className='caption'>Username*</label>
                                <input type='text' placeholder='Enter username' />
                                <label className='caption'>Password*</label>
                                <input type='password' placeholder='Enter password' />
                                <label className='fpassword'>Forgot <span>Password?</span></label>
                                <button>Submit</button>
                                <label className='signup'>Don't have an account? <span>Sign up</span></label>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='footer'>
                    <span>Copyright @ {cyear}. All rights reserved.</span>
                    <span>Leorasoft Technologies India Pvt. Ltd.</span>
                </div>
            </div>
        );
    }
}

export default App;
