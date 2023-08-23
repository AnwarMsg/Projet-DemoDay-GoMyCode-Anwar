import React from 'react'
import '../css/home.css'
import img1 from '../images/4294.jpg'
import img2 from '../images/jumelles-loupe-carte.jpg'
import img3 from '../images/3820658.jpg'
import img4 from '../images/7792030.jpg'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Home = () => {
    const navigate = useNavigate();
    const token = useSelector(state => state.LoginRedux.islogged);
    const [ath, setAth] = useState(false)

    useEffect(() => {
      if(localStorage.hasOwnProperty("user")) {
        setAth(true)
      } else {
        setAth(false)
      }
  }, [token])

const handleClick = () => {
    if(ath) {
        navigate("/profile")
    } else {
        navigate("/login")
    }
}

    return (
      <div>
        <section id="hero">
            <h2>Challenge Yourself with Quizzes!</h2>
            <p>Explore our diverse range of quizzes on various topics.</p>
            {ath ? <Link to="/profile"><a class="cta-button">Get Started</a></Link> : <Link to="/login"><a class="cta-button">Get Started</a></Link>}
            <div class="custom-shape-divider-bottom-1687047172">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shape-fill"></path>
                </svg>
            </div>
        </section>

        <section id="categories">
            <h2>Our Popular Categories</h2>
            <p>Check our most consulted quiz categories in our website.</p>
            <div class="category">
                <div class="category-content"> 
                    <img src={img3} alt="Science Quiz" />
                    <h3>Science</h3>
                    <p>Test your scientific knowledge with our challenging quizzes.</p>
                    <a onClick={handleClick}>Start Quiz</a>
                </div>
            </div>
            <div class="category">
                <div class="category-content">
                    <img src={img2} alt="History Quiz"/>
                    <h3>History</h3>
                    <p>Travel through time and test your history knowledge.</p>
                    <a onClick={handleClick}>Start Quiz</a>
                </div>
            </div>
            <div class="category">
                <div class="category-content">
                    <img src={img1} alt="Sports Quiz"/>
                    <h3>Sports</h3>
                    <p>Are you a sports enthusiast? Take our sports quizzes now.</p>
                    <a onClick={handleClick}>Start Quiz</a>
                </div>
            </div>
            <div class="category">
                <div class="category-content">
                    <img src={img4} alt="Music Quiz"/>
                    <h3>Music</h3>
                    <p>Test your musical knowledge with our captivating quizzes.</p>
                    <a onClick={handleClick}>Start Quiz</a>
                </div>
            </div>
            <div class="sm">
                <a onClick={handleClick}>See More</a>
            </div>
        </section>
        <section id="about">
            <h2>About Us</h2>
            <p>
            At QuizzyFun, we're on a mission to make learning fun, engaging, and interactive.
            Our passion for knowledge and a touch of innovation led us to create this platform, where quizzes aren't just
            tests of what you know, but exciting journeys of discovery.
            </p>
            <p>
            So whether you're a trivia aficionado, a curious explorer, or someone seeking a new way to learn, QuizzyFun 
            welcomes you to join us on this exciting journey. Let's turn every quiz into a story, every question into a quest, and
            every answer into an opportunity to expand your horizons.
            </p>
        </section>
        <section id="contact">
            <h2>Contact Us</h2>
            <h3>Get in Touch with Us</h3>
            <p>We're here to help and eager to hear from you. Whether you have questions, suggestions, or just want to say hello, don't hesitate to reach out.
                Our team is committed to providing you with the best experience possible, and your feedback is invaluable in making that happen.
            </p>
            <h3>Contact Information :</h3>
            <p>
                <span className='em'>Email:</span> Reach us at <span className='em1'>contact@quizzyfun.com</span> for any inquiries, feedback, or assistance you may need. We strive to respond within 24 hours.
            </p>
        </section>
      </div>
    )
  }
  
  export default Home