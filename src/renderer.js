/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import {render} from 'react-dom';

import {Style} from 'components/style';
import Header from 'components/Header';
import DirentList from 'components/DirentList';
import {DirectoryProvider} from 'components/context';

const App = () => { 
  return (
    <>
      <Style/>
      <DirectoryProvider>
        <Header/>
        <DirentList/>
      </DirectoryProvider>
    </>
  );
}

render(<App/>, document.getElementById('root'));