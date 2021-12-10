import {useState, useEffect} from 'react';

import {Wrapper, Head, Body, Row, Header, Data} from './components';

import {useDirectory} from 'components/context';

const DirentList = () => {
  const [dirents, setDirents] = useState(null);
  const {directory, changeDirectory, filters} = useDirectory();

  useEffect(() => {
    (async () => {
      setDirents(await api.getDirents(directory.path));
    })();
  }, [directory.path]);
  
  if (!dirents) return null;

  const filteredDirents = dirents.filter(dirent => {
    const patternRegExp = new RegExp(filters.pattern, 'i');

    return patternRegExp.test(dirent.name)
      || patternRegExp.test(dirent.extension);
  });

  const renderedRows = filteredDirents.map(dirent => {
    return (
      <Row 
        key={dirent.name} 
        onDoubleClick={dirent.isDirectory ? () => {
          changeDirectory(dirent.path)
        } : undefined}
        isInteractive={dirent.isDirectory}
      >
        <Data>{dirent.name}</Data>
        <Data>{
          dirent.dateModified.toLocaleString('default', {
            day: 'numeric',
            month: 'long',
            hour: 'numeric', 
            hour12: true,
            minute: 'numeric',
          }
        )}</Data>
        <Data>{
          dirent.extension
            ? dirent.extension.replace('.', '').toUpperCase() 
            : dirent.isDirectory ? 'Folder' : 'Unknown'
        }</Data>
        <Data>{Math.ceil(dirent.size / 1024)} KB</Data>
      </Row>
    );
  });

  return (
    <Wrapper>
      <Head>
        <Row>
          <Header>Name</Header>
          <Header>Date Modified</Header>
          <Header>Kind</Header>
          <Header>Size</Header>
        </Row>
      </Head>
      <Body>{renderedRows}</Body>
    </Wrapper>
  );
}

export default DirentList; 