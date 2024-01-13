import { AppleFilled, WindowsFilled } from "@ant-design/icons";
import { Card } from "antd";

import eaLogo from "../../assets/ea-logo.png";
import wave from "../../assets/wave.png";
import { useAction } from "./hook";
export const Home = () => {
  const { onClickDownload } = useAction();

  return (
    <div
      className="flex flex-col w-screen h-screen bg-black"
      style={{
        backgroundImage: `url(${wave})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center flex-1 justify-center p-5">
        <img src={eaLogo} className="w-[12rem]" />
        <span className="text-[2.5rem] text-[#fff] font-black tracking-[.35em] mt-5 whitespace-nowrap">
          欢迎使用 Echo Avatar
        </span>
        <span className="text-[2.5rem] text-[#fff] font-black tracking-[.14em] whitespace-nowrap">
          请选择相应的操作系统进行下载
        </span>
        <span className="text-[#fff] text-[1.5rem] pt-3 whitespace-nowrap">
          同时支持Windows，macOS
        </span>
        <div className="flex justify-center items-center flex-wrap">
          <div className="flex flex-col mx-8">
            <Card
              className="flex flex-row rounded-full px-[4rem] py-5 mt-5 items-center justify-center text-[#fff]"
              onClick={() => onClickDownload(true)}
              hoverable
            >
              <div className="flex items-center">
                <WindowsFilled className="text-[2.5rem] text-[#fff]" />
                <span className="text-2xl font-light px-2">Windows</span>
              </div>
            </Card>
          </div>
          <div className="flex flex-col justify-center items-center mx-8">
            <Card
              className="flex flex-row rounded-full px-[4rem] py-5 mt-5 items-center justify-center text-[#fff]"
              onClick={() => onClickDownload(false)}
              hoverable
            >
              <div className="flex items-center">
                <AppleFilled className="text-[2.5rem] text-[#fff]" />
                <span className="text-2xl font-light px-5">macOS</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
