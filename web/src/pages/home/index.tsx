import { AppleFilled, WindowsFilled } from "@ant-design/icons";
import { Card } from "antd";

import eaLogo from "../../assets/ea-logo.png";
import echoAvatar from "../../assets/echo-avatar.png";
import wave from "../../assets/wave.png";
import { useAction } from "./hook";
export const Home = () => {
  const { onClickDownload } = useAction();

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="bg-[#4F467B] shadow-indigo-500/30 shadow-lg">
        <img src={echoAvatar} className="w-[15rem] p-2" />
      </div>
      <div
        className="flex flex-col items-center flex-1 justify-center"
        style={{ backgroundImage: `url(${wave})` }}
      >
        <img src={eaLogo} className="w-[8rem]" />
        <span className="my-5 text-xl font-normal">
          欢迎使用 Echo Avatar ，请选择相应系统进行下载
        </span>
        <div className="flex justify-center items-center">
          <div className="flex flex-col mx-10">
            <Card
              className="flex flex-row rounded-full px-12 py-3 items-center justify-center bg-[#927FBC] text-white"
              onClick={() => onClickDownload(true)}
              hoverable
            >
              <div className="flex items-center">
                <WindowsFilled className="text-[2rem] text-white" />
                <span className="text-xl font-light px-2">Windows</span>
              </div>
            </Card>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Card
              className="flex flex-row rounded-full px-12 py-3 items-center justify-center bg-[#927FBC] text-white"
              onClick={() => onClickDownload(false)}
              hoverable
            >
              <div className="flex items-center">
                <AppleFilled className="text-[2rem] text-white" />
                <span className="text-xl font-light px-5">macOS</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
