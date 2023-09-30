import React from 'react'

interface Props { 
    children: React.ReactNode
}

export default function DashboardLayout({children}: Props) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
   
        {children}
      </section>
    )
  }