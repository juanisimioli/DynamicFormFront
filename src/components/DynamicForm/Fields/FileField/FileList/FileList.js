import PropTypes from "prop-types";
import style from "./fileList.module.scss";

const FileList = ({ files, handleRemoveFile }) => {
  return (
    <div className={style.container}>
      {files?.map((f, i) => {
        return (
          <div key={i} className={style.item}>
            <div>{f.name}</div>
            <button
              className={style.closeButton}
              onClick={(e) => handleRemoveFile(e, i)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 21 21"
                className={style.closeButton}
              >
                <path d="M9.543 10.503L.691 19.418a.637.637 0 0 0 0 .896.624.624 0 0 0 .89 0l8.919-8.981 8.919 8.981a.625.625 0 0 0 .89 0 .637.637 0 0 0 0-.896l-8.852-8.915 8.858-8.92a.637.637 0 0 0 0-.898.626.626 0 0 0-.89 0L10.5 9.674 1.574.686a.626.626 0 0 0-.89 0 .637.637 0 0 0 0 .896l8.86 8.921z" />
              </svg>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FileList;

FileList.propTypes = {
  files: PropTypes.array,
  handleRemoveFile: PropTypes.func,
};
