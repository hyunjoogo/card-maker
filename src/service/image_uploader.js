// 업로드 기능있는 클래스
// 클래스를 사용하는 사람에게 파일이라는 것을 받아와 업로드하고
// 그 업로드된 파일의 URL을 전달해주는 역할

class ImageUploader {
  // why async??
  // 서버에 업로드를 하고 완료가 되면 그 결과값을 리턴하니까
  // 동작이 완료되고 나서 다른 동작을 실핼할 때는 async & promise
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'sr1vl4jl');
    const result = await fetch('https://api.cloudinary.com/v1_1/ddbsob8qu/upload', {
      method: "POST",
      body: data,
    });
    return await result.json();
  };

}

export default ImageUploader;
