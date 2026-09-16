import React, { useEffect, useState, type FC } from "react";
import styles from "./MemeForm.module.css";
import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import Button from "../../ui/Button/Button";

interface IMemeFormProps {
  images: Array<ImageInterface>;
  meme: MemeInterface;
  onMemeSubmit: (newValue: MemeInterface) => void;
  onMemeChange: (newValue: MemeInterface) => void;
}

const MemeForm: FC<IMemeFormProps> = ({ images, meme, onMemeSubmit, onMemeChange }) => {
  /*const [state, setState] = useState(meme);
  useEffect(() => {
   onMemeChange(state)
  }, [state, onMemeChange])
  */
  /**
   * gestion de l'event des input change pour des valeurs string
   * @param evt {React.ChangeEvent} event de l'input
   */
  const onStringInput: React.ChangeEventHandler<
    HTMLInputElement,
    HTMLInputElement
  > = (evt) => {
    onMemeChange({ ...meme, [evt.target.name]: evt.target.value });
  };
  /**
   * gestion de l'event des input change pour des valeurs number
   * @param evt {React.ChangeEvent} event de l'input
   * @returns {undefined}
   */
  const onNumberInput: React.ChangeEventHandler<
    HTMLInputElement|HTMLSelectElement,
    HTMLInputElement|HTMLSelectElement
  > = (evt) => {
    onMemeChange({ ...meme,
      [evt.target.name]: Number.parseInt(evt.target.value),
    });
  };
  /**
   * gestion de l'event des input change pour des valeurs checked
   * @param evt {React.ChangeEvent} event de l'input
   */
    const onCheckChange: React.ChangeEventHandler<
    HTMLInputElement,
    HTMLInputElement
  > = (evt) => {
   onMemeChange({ ...meme,
      [evt.target.name]: evt.target.checked,
    });
  };
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form onSubmit={evt=>{
        evt.preventDefault()
        onMemeSubmit(meme)
      }}>
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input
          name="titre"
          id="titre"
          value={meme.titre}
          onChange={onStringInput}
        />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="imageId" id="image" value={meme.imageId} onChange={onNumberInput}>
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
          value={meme.text}
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
          value={meme.x}
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
          value={meme.y}
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
          value={meme.color}
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
          value={meme.fontSize}
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
          value={meme.fontWeight}
          onChange={onStringInput}
        />
        <br />
        <input name="underline" id="underline" type="checkbox" checked={meme.underline} onChange={onCheckChange} />
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
        <input name="italic" id="italic" type="checkbox" checked={meme.italic} onChange={onCheckChange} />
        <hr />
        <br />
          <h2 >frame size</h2>
        <label htmlFor="frameSizeX">
          <h2 style={{ display: "inline" }}>X :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeX"
          id="frameSizeX"
          type="number"
          min="0"
          value={meme.frameSizeX}
          onChange={onNumberInput}
        />
        px{" "}
        <label htmlFor="frameSizeY">
          <h2 style={{ display: "inline" }}>Y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeY"
          id="frameSizeY"
          type="number"
          min="0"
          value={meme.frameSizeY}
          onChange={onNumberInput}
        />
        px
        <hr />
        <div style={{textAlign:"center"}}>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default MemeForm;
