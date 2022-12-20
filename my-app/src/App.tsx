import { Route, Routes } from "react-router-dom";
import { Content } from "./components/content/content";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect, useState } from "react";
import {
  IContentArrayEl,
  fetchContent,
} from "./components/content/contentActionsI";
import { ContentElement } from "./components/contentElement/contentElement";
import { Loader } from "./components/loader/loader";

export const App = () => {
  const dispatch = useAppDispatch();
  const { content } = useAppSelector((state) => state.content);
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchContent());
      setShowContent(true);
    }, 2000);
  }, [dispatch]);
  return (
    <div className="App">
      {showContent && (
        <Routes>
          <Route path="/" element={<Content />} />
          {content.map((el: IContentArrayEl) => (
            <Route
              path={el.direction.link}
              element={
                <Content
                  child={
                    <ContentElement
                      direction={el.direction}
                      groups={el.groups}
                    />
                  }
                />
              }
            />
          ))}
        </Routes>
      )}
      {!showContent && <Loader />}
    </div>
  );
};
