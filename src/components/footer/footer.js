import { Link } from 'gatsby'
import React from 'react'
import Logo from "../../images/logo.png"
import './footer.css'

export default function footer() {
  return (
    <footer>
      <div className='footer-inner'>
        <ul className='f-left'>
          <li><Link to='/'>TOP</Link></li>
          <li><Link>Who We Are</Link></li>
          <li>
            <Link>Activities</Link>
            <li className='f-child'><Link>Community</Link></li>
            <li className='f-child'><Link>Welfare Programme </Link></li>
            <li className='f-child'><Link>Sales Support</Link></li>
          </li>
        </ul>
        <ul className='f-center'>
          <li><Link>User's Voice</Link></li>
          <li><Link>Topics</Link></li>
          <li><Link>Membership</Link></li>
          <li><Link>About Us</Link></li>
          <li><Link>Contact</Link></li>
        </ul>
        <ul className='f-right'>
          <li className='logo'> <Link><img src={Logo} alt="ロゴ" className='f-logo' /></Link></li>
          <ul className='sp-list'>
          <li><Link to='/'>TOP</Link></li>
          <li><Link>Who We Are</Link></li>
          <li>
            <Link>Activities</Link>
          </li>
          <li><Link>User's Voice</Link></li>
          <li><Link>Topics</Link></li>
          <li><Link>Membership</Link></li>
          <li><Link>About Us</Link></li>
          <li><Link>Contact</Link></li>
          </ul>
          <li className='address'>
            一般社団法人　フリーランス連盟<br/>
            〒160-0022​<br/>
            東京都新宿区1-36-2 新宿第七葉山ビル3階<br/>
            TEL　03-6260-8797(平日10:00〜17:00)</li>
        <p className='end'>© {new Date().getFullYear()} Freelance Asociation. All Rights Reserved.{` `}</p>
        </ul>
      </div>
    </footer>
  )
}
