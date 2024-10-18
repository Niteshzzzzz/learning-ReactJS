import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
    <div class="f-cotainer">
        <div class="f-icons">
            <Link><i class="fa-brands fa-square-facebook"></i></Link>
            <Link ><i class="fa-brands fa-square-github"></i></Link>
            <Link><i class="fa-brands fa-square-instagram" id="in"></i></Link>
            <Link><i class="fa-brands fa-linkedin"></i></Link>
        </div>
        <div class="c-name">&copy; FindCountry Private Limited</div>
        <div class="f-links">
            <a href="">Privacy</a>
            <a href="">Terms</a>
            <a href="">Company details</a>
        </div>
    </div>
</footer>
  )
}
