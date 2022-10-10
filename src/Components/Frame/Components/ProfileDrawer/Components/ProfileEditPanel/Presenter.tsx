function base64Resize(
  sourceBase64: string,
  callback: (newSourceBase64: string) => void
) {
  if (sourceBase64.length >= 1048576) {
    const _scale = 0.95;
    var img = document.createElement("img");

    img.onload = () => {
      var canvas = document.createElement("canvas");
      canvas.width = img.width * _scale;
      canvas.height = img.height * _scale;

      var ctx = canvas.getContext("2d");
      var maxW = img.width * _scale;
      var maxH = img.height * _scale;

      var iw = img.width;
      var ih = img.height;
      var scl = Math.min(maxW / iw, maxH / ih);

      var iwScaled = iw * scl;
      var ihScaled = ih * scl;
      canvas.width = iwScaled;
      canvas.height = ihScaled;

      ctx!.drawImage(img, 0, 0, iwScaled, ihScaled);
      const newBase64 = canvas.toDataURL("image/jpeg", scl);

      base64Resize(newBase64, callback);
    };

    img.setAttribute("src", sourceBase64);
  } else {
    callback(sourceBase64);
  }
}

export function getBase64(
  file: File,
  callback: (newSourceBase64: string) => void
) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    base64Resize(reader.result as string, callback);
    console.log("depois configurar qual tamanho máximo das imagens");
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
}
