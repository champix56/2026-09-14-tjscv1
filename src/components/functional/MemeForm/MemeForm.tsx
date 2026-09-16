import React, { useEffect, useState, type FC } from "react";
import styles from "./MemeForm.module.css";
import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";

interface IMemeFormProps {
  images: Array<ImageInterface>;
  meme: MemeInterface;
  onMemeSubmit: (newValue: MemeInterface) => void;
}

const MemeForm: FC<IMemeFormProps> = ({ images, meme, onMemeSubmit }) => {
  const [state, setState] = useState(meme);
  /**
   * gestion 
   * @param evt {React.ChangeEvent} event de l'input
   */
  const onStringInput: React.ChangeEventHandler<
    HTMLInputElement,
    HTMLInputElement
  > = (evt) => {
    setState({ ...state, [evt.target.name]: evt.target.value });
  };
  const onNumberInput: React.ChangeEventHandler<
    HTMLInputElement,
    HTMLInputElement
  > = (evt) => {
    setState({
      ...state,
      [evt.target.name]: Number.parseInt(evt.target.value),
    });
  };
    const onCheckChange: React.ChangeEventHandler<
    HTMLInputElement,
    HTMLInputElement
  > = (evt) => {
    setState({
      ...state,
      [evt.target.name]: evt.target.checked,
    });
  };
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form>
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input
          name="titre"
          id="titre"
          value={state.titre}
          onChange={onStringInput}
        />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="image" id="image">
          <option value="-1">pas d'image</option>
          {images.map((e, i) => (
            <option key={"i" + i} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input
          name="text"
          id="text"
          type="text"
          value={state.text}
          onChange={onStringInput}
        />
        <br />
        <label htmlFor="x">
          <h2 style={{ display: "inline" }}>x :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="x"
          id="x"
          type="number"
          value={state.x}
          onChange={onNumberInput}
        />
        <label htmlFor="y">
          <h2 style={{ display: "inline" }}>y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="y"
          id="y"
          type="number"
          value={state.y}
          onChange={onNumberInput}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 style={{ display: "inline" }}>color :</h2>
        </label>
        <input
          name="color"
          id="color"
          type="color"
          value={state.color}
          onChange={onStringInput}
        />
        <br />
        <label htmlFor="fontSize">
          <h2 style={{ display: "inline" }}>font-size :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          value={state.fontSize}
          onChange={onNumberInput}
        />
        px
        <br />
        <label htmlFor="fontWeight">
          <h2 style={{ display: "inline" }}>font-weight :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          value={state.fontWeight}
          onChange={onStringInput}
        />
        <br />
        <input name="underline" id="underline" type="checkbox" checked={state.underline} onChange={onCheckChange} />
        &nbsp;
        <label htmlFor="underline">
          <h2 style={{ display: "inline" }}>underline</h2>
        </label>
        &nbsp;<h2 style={{ display: "inline" }}>/</h2>
        &nbsp;
        <label htmlFor="italic">
          <h2 style={{ display: "inline" }}>italic</h2>
        </label>
        &nbsp;
        <input name="italic" id="italic" type="checkbox" checked={state.italic} onChange={onCheckChange} />
        <hr />
        <br />
        <label htmlFor="frameSizeX">
          <h2 style={{ display: "inline" }}>frame size X :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeX"
          id="frameSizeX"
          type="number"
          min="0"
          value={state.frameSizeX}
          onChange={onNumberInput}
        />
        px{" "}
        <label htmlFor="frameSizeY">
          <h2 style={{ display: "inline" }}>frame size y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeY"
          id="frameSizeY"
          type="number"
          min="0"
          value={state.frameSizeY}
          onChange={onNumberInput}
        />
        px
        <br />
      </form>
    </div>
  );
};

export default MemeForm;
