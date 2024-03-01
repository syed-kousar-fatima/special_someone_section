import React from "react";
function Webpage() {
    return (
        <div>
            <div style={{padding:'10px',textAlign:'center'}}>
                <h3>Find Your Special Someone</h3>
            </div>
            <div style={{display:'flex',margin:'6%',justifyContent:'space-between'}}>
                <div >
                    <p style={{borderRadius:'50%',border:'solid 1px red',height: '100px',width:'100px',backgroundColor:'red'}}></p>
                    <h4>Sign Up</h4>
                    <p>Register for free & put up your Matrimony Profile</p>
                </div>
                <div>
                <p style={{borderRadius:'50%',border:'solid 1px red',height: '100px',width:'100px',backgroundColor:'red'}}></p>
                    <h4>Connect</h4>
                    <p>Select & Connect with Matches you like</p>
                </div>
                <div>
                <p style={{borderRadius:'50%',border:'solid 1px red',height: '100px',width:'100px',backgroundColor:'red'}}></p>
                    <h4>Interact</h4>
                    <p>Become a premium Member & Start a Conversation</p>
                </div>
            </div>
            <div style={{textAlign:'center',backgroundColor:'grey',padding:'2%'}}>
                <h2>Matrimony Service With Millions Of Success Stories</h2>
            </div>

        </div>
    )
}
export default Webpage;