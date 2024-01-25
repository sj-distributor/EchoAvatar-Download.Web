export const useAction = () => {
  const setting = (window as any).appSettings;

  const downloadUrlWindow = setting.downloadUrlWindow;

  const downloadUrlMac = setting.downloadUrlMac;

  const onClickDownload = async (isWindow: boolean) => {
    if (!downloadUrlWindow || !downloadUrlMac) return;
    const downloadLink = document.createElement("a");

    downloadLink.href = isWindow ? downloadUrlWindow : downloadUrlMac;
    downloadLink.download = "installer";
    document.body.appendChild(downloadLink);

    await new Promise((resolve) => setTimeout(resolve, 0));

    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  return { onClickDownload };
};
