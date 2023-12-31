import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#a2a0e5',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './images/logo.png',
  fullDecal: './images/logo.png',
});

export default state;