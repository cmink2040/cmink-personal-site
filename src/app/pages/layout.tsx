'use client'

import { NavBar } from "../components/Descriptors"
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}