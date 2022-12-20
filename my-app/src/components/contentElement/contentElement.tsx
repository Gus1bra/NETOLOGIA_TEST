import { IContentDirection, IContentGroup } from "../content/contentActionsI";
import "./contentElement.css";

interface IContentElProps {
  direction: IContentDirection;
  groups: IContentGroup[];
}

export const ContentElement = ({ direction, groups }: IContentElProps) => {
  return (
    <div className="content-element flex-column">
      <div className="content-title fw600">{direction.title}</div>
      {groups.map((group: IContentGroup) => (
        <div className="content-el ">
          <div className="flex-column">
            <div className="content-el-title fw600">{group.title}</div>
            <div className="content-el-items fw600">
              <div className="el-items">
                {group.items.map((item: IContentDirection) => (
                  <div
                    className="el-item"
                    style={{
                      color: item.badge.bgColor,
                    }}
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
