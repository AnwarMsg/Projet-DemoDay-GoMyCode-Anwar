import React from 'react'
import '../css/footer.css'
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
  return (
    <div>
        <footer class="footer">
            <div class="custom-shape-divider-top-1687193406">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <ul class="social-icon">
                <li class="social-icon__item"><a class="social-icon__link" href="https://www.facebook.com" target="_blank">
                    <ion-icon name="logo-facebook"></ion-icon>
                    </a></li>
                <li class="social-icon__item"><a class="social-icon__link" href="https://www.x.com" target="_blank">
                    <ion-icon name="logo-twitter"></ion-icon>
                    </a></li>
                <li class="social-icon__item"><a class="social-icon__link" href="https://www.linkedin.com"target="_blank">
                    <ion-icon name="logo-linkedin"></ion-icon>
                    </a></li>
                <li class="social-icon__item"><a class="social-icon__link" href="https://www.instagram.com" target="_blank">
                    <ion-icon name="logo-instagram"></ion-icon>
                    </a></li>
            </ul>
            <ul class="menu">
            <li class="menu__item"><HashLink smooth to="/#hero"><a class="menu__link">Home</a></HashLink></li>
            <li class="menu__item"><HashLink smooth to="/#categories"><a class="menu__link">Categories</a></HashLink></li>
            <li class="menu__item"><HashLink smooth to="/#about"><a class="menu__link">About</a></HashLink></li>
            <li class="menu__item"><HashLink smooth to="/#contact"><a class="menu__link">Contact</a></HashLink></li>

            </ul>
            <p>&copy;2023 QuizzyFun. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Footer