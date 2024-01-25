import { message } from "antd";

export const useAction = () => {
  const setting = (window as any).appSettings;

  const downloadUrlWindow = setting.downloadUrlWindow;

  const downloadUrlMac = setting.downloadUrlMac;

  const onClickDownload = async (isWindow: boolean) => {
    if ((isWindow && !downloadUrlWindow) || (!isWindow && !downloadUrlMac)) {
      message.warning("下載鏈接不存在！");
    }
    const downloadLink = document.createElement("a");

    downloadLink.href = isWindow ? downloadUrlWindow : downloadUrlMac;
    downloadLink.download = "installer";
    document.body.appendChild(downloadLink);

    try {
      await new Promise((resolve) => setTimeout(resolve, 0));

      downloadLink.click();
    } catch (error) {
      message.error("下载失败");
    } finally {
      document.body.removeChild(downloadLink);
    }
  };

  return { onClickDownload };
};
