import { useAppSelector } from "../../app/hooks";
import { IContentArrayEl } from "./contentActionsI";
import "./content.css";
import { Link } from "react-router-dom";

export interface IContentProps {
  child?: JSX.Element;
}

export const Content = ({ child }: IContentProps) => {
  const { content } = useAppSelector((state) => state.content);
  return (
    <div className="content">
      <div className="content-left flex-column">
        <div className="content-title fw600">
          Изучайте{" "}
          <Link className="title-link" to="/NETOLOGIA_TEST/">
            актуальные темы
          </Link>
        </div>
        {content.map((el: IContentArrayEl) => (
          <Link className="content-el" to={`/NETOLOGIA_TEST${el.direction.link}`}>
            <div className="content-el-left flex-column">
              <div className="content-el-title fw600">{el.direction.title}</div>
              <div className="content-el-size fw600">
                {el.groups.length} Курсов
              </div>
            </div>
            <div className="circle-btn"></div>
          </Link>
        ))}
      </div>
      <div className="content-right">{child}</div>
    </div>
  );
};
