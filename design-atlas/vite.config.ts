import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {localExportPlugin} from './scripts/local-export';
export default defineConfig({plugins:[react(),localExportPlugin()], server:{port:5173,strictPort:true}});
