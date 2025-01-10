import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import useIsMobile from '../hooks/isMobile'
import AccountLayout from '../layouts/AccountLayout'
import OffersLayout from '../layouts/OffersLayout'
import ProfileLayout from '../layouts/ProfileLayout'
import Index from '../pages/account/Index'
import Promotion from '../pages/account/Promotion'
import Settings from '../pages/account/Settings'
import Subscriptions from '../pages/account/Subscriptions'
import OfferPage from '../pages/account/offers/OfferPage'
import OffersNew from '../pages/account/offers/OffersNew'
import OffersReacted from '../pages/account/offers/OffersReacted'
import About from '../pages/account/profile/About'
import Addresses from '../pages/account/profile/Addresses'
import Profile from '../pages/account/profile/Profile'
import ProfilePhoto from '../pages/account/profile/ProfilePhoto'
import Services from '../pages/account/profile/Services'
import Specialties from '../pages/account/profile/Specialties'



const AccountRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AccountLayout />}>
        <Route index element={<Navigate to="profile" replace={true} />} />
        <Route path="profile" element={<ProfileLayout />}>
          <Route index element={<Profile />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="about" element={<About />} />
          <Route path="photo" element={<ProfilePhoto />} />
          <Route path="specialties" element={<Specialties />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:serviceId" element={<Services />} />
        </Route>

        <Route path="your-orders" element={<Index />} />
        <Route path="offers" element={<OffersLayout />}>
          <Route index element={<Navigate to="new" replace={true} />} />
          <Route path="new" element={<OffersNew />} />
          <Route path="reacted" element={<OffersReacted />} />
          <Route path="suggested" element={<OffersNew />} />
        </Route>
        <Route path="offers/:offerId" element={<OfferPage />} />
        <Route path="promotion" element={<Promotion />} />
        <Route path="settings" element={<Settings />} />
        <Route path="subscriptions" element={<Subscriptions />} />
      </Route>
    </Routes>

  )
}

export default AccountRouter