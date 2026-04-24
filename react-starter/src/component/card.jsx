import {User} from "lucide-react"

function Card(){
    return (
        <>
    <div className="top">
        <User size={16} strokeWidth={1.5} />
        <h2>Welcome Back</h2>
        <p>Please enter your info to sing in to zaap</p>
        <div className="top-child">
            <img src="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg" alt="Google-Image" />
            <img src="https://img.freepik.com/premium-psd/facebook-logo-blue-circle_705838-12823.jpg?semt=ais_hybrid&w=740&q=80" alt="Facebok-Image" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH9EcrbYSmK47DQTwAvrqRS9Hoyjuyyxi8gA&s" alt="apple-image" />
        </div>
    </div>
    
        </>
)
}


export default Card;
