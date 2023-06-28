import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './images/logo.svg',
  fullDecal: './images/logo.svg',
});

export default state;