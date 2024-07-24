import './index.css'
function SignUp(){
    return(
        <div  className = "signup">
            <div>
                <img src = "Image/logo.png" alt= ""/>
                <h1>UpcycleIt DashBoard</h1>
            </div>
        
         <form id = "form">
            
         <h2>Create Account</h2>
        <label for="fullname">Full Name</label>
        <br/>
        <input name="fullname" type="text" placeholder="" class="input"/>
        <br/>
        <br/>
      
        <label for="memberId"> Member Id</label>
        <br/>

        <input name="memberId" type="text" placeholder="" class="input"/>
        <br/>
        <br/>
        <label for="email">Email Address</label>
        <br/>
        <input name="email" type="email" placeholder="" class="input"/>
        <br/>
        <br/>
        <label for="dob">D.O.B</label>
        <br/>
        <input name="dob" type="date" class="input"/>
        <br/>
        <br/>
<label for="password">Password</label>
<br/>
<input name="password" type="password" placeholder="" class="input"/>
<br/>
<br/>
<button type="submit">Sign Up</button>

<p>Already have an account? <b>Login</b></p>

            
       </form>
        </div>
    )
}
export default SignUp;