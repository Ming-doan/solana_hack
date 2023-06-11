import Webcam from "react-webcam";
import Spacer from "./components/Utils";
import { Button, Radio } from "antd";
import * as buttonOptions from "./utils/button";
import { getImage } from "./apis/huggingface";
import { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

function App() {
  const [image, setImage] = useState(null);

  async function onCapture() {
    const url = await getImage("Anime girl", "Blurry");
    setImage(url);
  }

  return (
    <div class="container">
      <div className="title">Stable Diffusion Generator for NFT assets</div>
      <div className="content-container">
        <div className="webcam-container">
          <Webcam className="webcam" />
          <div className="stack">
            <Button type="primary" onClick={onCapture}>
              Capture
            </Button>
          </div>
        </div>
        <img src={image} className="image" />
      </div>
      <Spacer space={20} />
      <div className="content-container soft-padding">
        <div className="flex-col">
          <div className="subtitle">Select Gender</div>
          <Radio.Group
            options={buttonOptions.genderSelect}
            optionType="button"
            buttonStyle="solid"
          />
          <Spacer space={20} />
          <div className="subtitle">Hair style</div>
          <Radio.Group
            options={buttonOptions.hairSelect}
            optionType="button"
            buttonStyle="solid"
          />
          <Spacer space={20} />
          <div className="subtitle">Glasses style</div>
          <Radio.Group
            options={buttonOptions.glassSelect}
            optionType="button"
            buttonStyle="solid"
          />
          <Spacer space={20} />
          <div className="subtitle">Shirts style</div>
          <Radio.Group
            options={buttonOptions.shirtSelect}
            optionType="button"
            buttonStyle="solid"
          />
        </div>
        <div className='flex-col'>
          <WalletMultiButton />
        </div>
      </div>
    </div>
  );
}

export default App;
