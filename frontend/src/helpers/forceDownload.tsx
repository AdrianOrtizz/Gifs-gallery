const forceDownload = async (GifUrl: string, name: string) => {
  const response = await fetch(GifUrl);
  const blob = await response.blob();

  const blobUrl = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = name;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  window.URL.revokeObjectURL(blobUrl);
};

export default forceDownload;
