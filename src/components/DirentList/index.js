import {useState, useEffect} from 'react';

import {Wrapper, Head, Body, Row, Header, Data} from './components';

const DirentList = () => {
  const [dirents, setDirents] = useState(null);
  console.log(dirents);

  useEffect(() => {
    (async () => {
      setDirents(await api.getDirents());
    })();
  }, []);
  
  if (!dirents) return null;

  const renderedRows = dirents.map(dirent => {
    return (
      <Row key={dirent.name}>
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
        <Data>{dirent.extension || 'Folder'}</Data>
        <Data>{dirent.size} KB</Data>
      </Row>
    );
  });

  return (
    <Wrapper>
      {/* <Head>
        <Header title='name'/>
        <Header title='date modified'/>
        <Header title='kind'/>
        <Header title='size'/>
      </Head> */}
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