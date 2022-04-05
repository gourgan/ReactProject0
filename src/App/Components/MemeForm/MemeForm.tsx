import React from "react";
import { I_Image, I_Meme } from "../../interfaces/meme";
import Button from "../Button/Button";
import style from "./MemeForm.module.css";

interface I_MemeFormProps {
  currentMeme: I_Meme;
  images: Array<I_Image>;
  onInputValueChange: Function;
}

const MemeForm: React.FC<I_MemeFormProps> = (props) => {
  return (
    <div className={style.MemeForm} data-testid="MemeForm">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
        }}
      >
        <input
          type="text"
          name="memeText"
          id=""
          placeholder="text du meme"
          value={props.currentMeme.text}
          onChange={(evt) => {
            props.onInputValueChange({ text: evt.target.value });
          }}
        />
        <div className="flexCol">
          <Button type="submit" bgColor="skyblue">
            Valider
          </Button>
          <Button type="reset" bgColor="tomato">
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MemeForm;
