import fileDownload from 'js-file-download';

export const getBase64 = (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  return new Promise((resolve, reject) => {
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
};

export const getParamsForFileUrl = (file, forType) => ({
  skip: !file,
  variables: {
    files: {
      fileType: file?.type,
      fileName: file?.name ? file.name.split('.').join('_') : undefined,
      for: forType,
    },
  },
});

export const heicToJpeg = async (file) => {
  const fileName = file.name;

  const heic2any = await import('heic2any');

  const newFile = await heic2any.default({
    blob: file,
    toType: 'image/jpeg',
  });
  newFile.name = `${fileName}.jpg`;

  return newFile;
};

export const trackDownloadingOnXHR = async ({ url, onProgress }) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'blob';

    xhr.onprogress = (event) => {
      onProgress?.(event);
    };

    xhr.onload = (e) => {
      if (xhr.status !== 200) {
        reject();
      } else {
        resolve(e);
      }
    };

    xhr.send();
  });

export const download = async (
  fileUrl,
  fileName,
  fileType,
  sectionId,
  sectionName
) => {
  const result = await trackDownloadingOnXHR({
    url: fileUrl,
    fileName,
    sectionId,
    sectionName,
  });
  const blob = result.currentTarget.response;

  fileDownload(blob, fileName, fileType);
};

export const uploadFile = async ({
  file,
  uploadUrl,
  method = 'PUT',
  onProgress = undefined,
  fileId,
  responseData = {},
}) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open(method, uploadUrl);

    request.setRequestHeader('Content-Type', file.type);

    // upload progress event
    request.upload.addEventListener('progress', (e) => {
      onProgress?.(e);
    });

    request.addEventListener('load', () => {
      if (request.status !== 200) {
        reject(request.responseText);
      } else {
        resolve({
          status: 'fulfilled',
          fileId,
          responseData,
        });
      }
    });

    request.addEventListener('error', (e) => {
      // eslint-disable-next-line no-console
      console.log(e);

      reject(e);
    });

    request.send(file);
  });
