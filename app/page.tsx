// src/app/page.tsx
'use client';

import Image from 'next/image';
import './globals.css';

export default function HomePage() {
  return (
    <>
      <header>
        <h1>Welcome to Strata Manager</h1>
        <p>Efficient and easy property management</p >
      </header>

      <nav>
        <ul>
          <li>Home</li>
          <li>Resident Info</li>
          <li>Email sending</li>
          <li>Mailbox</li>
        </ul>
      </nav>

      <main>
        <section>
          <h2>About</h2>
          <p>This site helps manage strata properties with ease. Use the menu to navigate.</p >
          <Image src="/B1.png" alt="logo" width={600} height={300} className="logo" />
        </section>
      </main>


      const manager = process.env.NEXT_PUBLIC_MANAGER_NAME;

      return (
        <div>
          <h2>Managed by: {manager}</h2>
        </div>
      );
      
      <footer>
        <p>&copy; 2025 Strata Manager</p >
      </footer>
    </>
  );
}