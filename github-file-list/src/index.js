import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import './index.css';

function FileList({ files }) {
  return (
    <table className='file-list'>
      <tbody>
        {files.map(file =>  <FileListItem key={file.id} file={file} />)}
      </tbody>
    </table>
  )
}
FileList.propTypes = {
  files: PropTypes.array
}

function FileListItem({ file }) {
  return (
  <tr className='file-list-item'>
      <FileIcon file={file} />
      <FileName file={file} />
  </tr>
  )
}
FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
}

function FileIcon({ file }) {
  let icon = 'fa-file-text-o';
  if (file.type === 'folder') {
    icon = 'fa-folder';
  }
  return (
    <td className='file-icon'>
      <i className={`fa ${icon}`} />
    </td>
  );
}
FileIcon.propTypes = {
  file: PropTypes.object.isRequired,
}

// function getFileName(file) {
//   return [
//     <FileIcon file={file} key={0} />,
//     <td className='file-name' key={1}>{file.name}</td>
//   ]
// }

function FileName({ file }) {
  return (
    <td className='file-name'>
      {file.name}
    </td>
  )
}

const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Initial commit',
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Initial commit',
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: '2016-07-18 21:24:00',
    latestCommit: {
      message: 'Added a readme'
    }
  }
];

ReactDOM.render(<FileList files={testFiles}/>, document.querySelector('#root'))