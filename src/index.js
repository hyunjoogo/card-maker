import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

import 'normalize.css';
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";


const authService = new AuthService();
// 왜 여기서 FileInput을 정의하고 보내는 것일까?
// 만약 나중에 FileInput에 추가적인 Prop이 필요하다면 그 갯수만큼 계속 내려줘야한다.
// 하지만 FileInput을 여기서 해놓으면 Prop이 추가할 때
// FileInput에만 넣어주면 주면 알아서 내려가기 때문이다.
// 컴포넌트 Prop은 대문자로 시작, 맨 앞에 적을 수 있도록...
const imageUploader = new ImageUploader();
const FileInput = props => (<ImageFileInput {...props} imageUploader={imageUploader} />)

ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);

