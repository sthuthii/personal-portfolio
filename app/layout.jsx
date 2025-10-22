// app/layout.jsx

import '../styles/globals.css';
import Header from '../components/Header'; // Top nav

export const metadata = {
  title: 'Sthuthi Poojary | Portfolio',
  description: 'Software developer portfolio featuring collabboard and other projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 20px' }}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}