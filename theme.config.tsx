import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useTheme } from 'nextra-theme-docs'
const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img
        src="/logo.png" // your round logo in public folder
        alt="Zithara"
        style={{
          height: '60px',
          width: '60px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
      <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Docs</span>
    </div>
  ),


  project: {
    link: 'https://github.com/Zithara-in',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/Zithara-in',
  footer: {
    text: 'Zithara Documentation',
  },
}

export default config
