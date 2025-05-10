export default function manifest() {
  return {
    name: 'Impact Pal Event Calendar',
    short_name: 'ImpactPal Events',
    description: 'Event calendar for Impact Pal Thailand - Social Impact events',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4285F4',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}