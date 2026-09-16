import React, { useEffect } from "react";
import FlexH1RstGrow from "../components/layouts/FlexH1rstGrow/FlexH1rstGrow";
import MemeSVGViewer from "../components/ui/MemeSvgViewer/MemeSvgViewer";
import MemeForm from "../components/functional/MemeForm/MemeForm.stored";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { emptyMeme } from "orsys-tjs-meme";
import { updateCurrent } from "../store/currentSlice";

type Props = {};

const Editor = (props: Props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const memes = useSelector((s: RootState) => s.ressources.memes);
  const isLoaded = useSelector((s: RootState) => s.ressources.isLoaded);
  const nav = useNavigate();
  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    let selectedMemeUrl = undefined;
    if (undefined !== params.id) {
      selectedMemeUrl = memes.find((m) => m.id === Number(params.id));
    } else {
      selectedMemeUrl = emptyMeme;
    }
    if (undefined === selectedMemeUrl) {
      nav("/");
      return;
    }
    dispatch(updateCurrent(selectedMemeUrl!));
  }, [params.id, memes, dispatch, nav, isLoaded]);
  return (
    <FlexH1RstGrow>
      <MemeSVGViewer basePath="" />
      <MemeForm />
    </FlexH1RstGrow>
  );
};

export default Editor;
