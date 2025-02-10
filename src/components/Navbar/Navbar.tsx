'use client'; // This makes it a Client Component


import { Link } from 'react-router-dom';

// components
import NavbarButton from './NavbarButton';

const Navbar: React.FC = () => (
  <nav className='navbar-inner no-select'>
    <div className='logo'>
      <Link to='/market'>
        <img
          draggable='false'
          alt='Crypto Exchange'
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
        />
      </Link>
    </div>
    <h3>Ana menü</h3>
    <ul>
      <li>
        <NavbarButton url='/dashboard' icon='dashboard' title='Yatır-çek' />
      </li>
      <li>
        <NavbarButton url='/wallet' icon='account_balance_wallet' title='Cüzdanım' />
      </li>
      <li>
        <NavbarButton url='/transactions' icon='sync' title='İşlemler' />
      </li>
      <li>
        <NavbarButton url='/trading' icon='paid' title='Ticaret' />
      </li>
      <li>
        <NavbarButton url='/exchange' icon='account_balance' title='Takas' />
      </li>
      <li>
        <NavbarButton url='/capital' icon='equalizer' title='Piyasa' />
      </li>
    </ul>
    <h3>Diğerleri</h3>
    <ul>
      <li>
        <NavbarButton url='/members' icon='account_circle' title='Profil' />
      </li>
      <li>
        <NavbarButton url='/contacts' icon='contacts' title='Kişiler' />
      </li>
      <li>
        <NavbarButton url='/messages' icon='chat' title='Mesajlar' />
      </li>
      <li>
        <NavbarButton url='/settings' icon='settings' title='Ayarlar' />
      </li>
    </ul>
    <div className='copyright'>
      <strong>NebulaXBT</strong>
      <p>
        2025 
        <br />
        <br />
        Made with <span>❤</span> by Cenk SARI
      </p>
    </div>
  </nav>
);

export default Navbar;
