import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/app';

const root = document.createElement('div');
root.id = 'root';
document.body.append(root);

createRoot(document.getElementById('root')).render(<App />);
