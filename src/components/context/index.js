import {createContext, useState, useContext} from 'react';

const DirectoryContext = createContext();

const DirectoryProvider = ({children}) => {
  const [prevPaths, setPrevPaths] = useState([]);
  const [nextPaths, setNextPaths] = useState([]);
  const [path, setPath] = useState();

  return (
    <DirectoryContext.Provider value={{
      path, setPath, prevPaths, setPrevPaths, nextPaths, setNextPaths
    }}>
      {children}
    </DirectoryContext.Provider>
  );
}

function useDirectory() {
  const {
    path, setPath, prevPaths, setPrevPaths, nextPaths, setNextPaths
  } = useContext(DirectoryContext);
  const directory = {path};
  
  function changeDirectory(path) {
    setPath(prevPath => {
      setPrevPaths(prevPaths => [...prevPaths, prevPath]);
      setNextPaths([]);

      return path;
    });
  }

  function goBack() {
    if (!prevPaths.length) return;

    setPath(currPath => {
      const lastPrevPath = prevPaths[prevPaths.length - 1];
      setPrevPaths(prevPaths => prevPaths.slice(0, prevPaths.length - 1));
      setNextPaths(nextPaths => [currPath, ...nextPaths]);

      return lastPrevPath;
    });
  }

  function goForward() {
    if (!nextPaths.length) return;

    setPath(currPath => {
      const firstNextPath = nextPaths[0];
      setPrevPaths(prevPaths => [...prevPaths, currPath]);
      setNextPaths(nextPaths => nextPaths.slice(1));

      return firstNextPath;
    });
  }

  return {directory, changeDirectory, goBack, goForward};
}

export {DirectoryProvider, useDirectory};