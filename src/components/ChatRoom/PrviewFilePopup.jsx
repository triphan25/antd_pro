import React from 'react';
import Styles from './chat.less';
import { CloseCircleOutlined } from '@ant-design/icons';

const PrviewFilePopup = ({ filesPreview, deleteFile }) => {
  return (
    <div className={Styles.prview_popup}>
      <div className={Styles.preview_box}>
        {filesPreview.length > 0 &&
          filesPreview.map((item) => (
            <div className={Styles.preview_item} key={item?.id}>
              {item?.type.includes('image') && (
                <img src={item?.previewUrl} className={Styles.file_item} />
              )}
              {item?.type.includes('video') && (
                <video controls className={Styles.file_item}>
                  <source src={item.previewUrl} />
                </video>
              )}

              <div className={Styles.delete_box} onClick={(e) => deleteFile(item)}>
                <CloseCircleOutlined style={{ color: '#cb0202' }} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PrviewFilePopup;
