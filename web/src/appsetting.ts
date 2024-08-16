export interface IAppSettings {
  downloadUrl: string;
}

export const InitialAppSetting = async () => {
  await fetch("../appsetting.json", {
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((res: IAppSettings) => {
      (window as any).appSettings = res;
    });
};
